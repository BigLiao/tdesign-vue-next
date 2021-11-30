const fs = require('fs');
const path = require('path');
const axios = require('axios');
const _template = require('lodash/template');
const utils = require('../../../script/utils');

const [second] = process.argv.slice(2);

/**
 * icon scripts
 * @example node index.js  // update all icons
 * @example node index.js clear // clear all icons
 * @example node index.js demo // update all icons demo
 */

function createFile(path, data = '') {
  fs.writeFile(path, data, (err) => {
    if (err) {
      utils.log(err, 'error');
    } else {
      utils.log(`${path} file has been created successfully！`, 'success');
    }
  });
}

function getIconsFromCDN() {
  return new Promise((resolve) => {
    axios
      .request({
        // 蓝鲸的 url 地址，仅在内网可以使用
        url: 'https://tdesign.gtimg.com/icon/web/index.json',
        // TDesign 的 url 地址，外网也可以使用
        // url: 'https://tdesign.gtimg.com/icon/web/index.json',
        method: 'get',
      })
      .then((response) => {
        // handle success
        resolve(response.data.icons);
      });
  });
}

async function updateIcons() {
  const icons = await getIconsFromCDN();
  icons.forEach((icon) => {
    const tplPath = path.resolve(__dirname, '../single.tsx');
    let data = fs.readFileSync(tplPath).toString();
    const svg = icon.svgCode.replace('<svg', '<svg class={this.classes} style={this.iconStyle} ');
    data = data.replace('/** SVG NAME */>', icon.name).replace('<svg>/** SVG CODE */</svg>', svg);
    const output = path.resolve(__dirname, `../${icon.name}.tsx`);
    createFile(output, data);
  });
}

function clearIcons() {
  const svgDir = path.resolve(__dirname, '../');
  const files = fs.readdirSync(svgDir);
  files.forEach((f) => {
    // 以下文件和目录不删除
    if (['README.md', 'index.ts', 'single.tsx', 'generate', 'iconfont', 'svg'].includes(f)) return;
    const _del = path.resolve(svgDir, f);
    fs.existsSync(_del) && fs.unlinkSync(_del);
  });
}

async function updateDemo() {
  const icons = await getIconsFromCDN();
  const data = [];
  icons.forEach((icon) => {
    data.push(`<div class="t-demo-icon">
      <t-icon name="${icon.name}"/>
      <div class="t-demo-icon-name">${icon.name}</div>
    </div>`);
  });

  const tplPath = path.resolve(__dirname, './demo.tpl');
  const tplData = fs.readFileSync(tplPath).toString();
  const compile = _template(tplData);
  const iconDemo = compile({
    icons: data.join('\n    '),
  });

  const output = path.resolve(__dirname, '../../../examples/icon/demos/all.vue');
  createFile(output, iconDemo);
}

const operation = { clear: clearIcons, demo: updateDemo }[second] || updateIcons;

operation();
