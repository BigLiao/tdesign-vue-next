import path from 'path';
import uslug from 'uslug';
import mdContainer from 'markdown-it-container';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right';
import prism from 'markdown-it-prism';

const uslugify = (s) => uslug(s);

export default function installMarkdownPlugins(md) {
  md.use(prism)
    .use(markdownItAnchor, {
      permalink: true,
      permalinkSymbol: '',
      permalinkClass: 'tdesign-header-anchor',
      slugify: uslugify,
    })
    .use(markdownItTocDoneRight, {
      level: [2, 3],
      containerClass: 'tdesign-toc_container',
      listClass: 'tdesign-toc_list',
      itemClass: 'tdesign-toc_list_item',
      linkClass: 'tdesign-toc_list_item_a',
      slugify: uslugify,
    });

  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const match = tokens[idx].info.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
        const [, demoPath, componentName = ''] = match;
        const demoPathOnlyLetters = demoPath.replace(/[^a-zA-Z\d]/g, '');
        const demoName = path.basename(demoPath).trim();
        const demoDefName = `Demo${demoPathOnlyLetters}`;
        const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;

        const tpl = `
          <td-doc-demo :code="${demoCodeDefName}" demo-name="${demoName}" component-name="${componentName.trim()}">
            <div slot="action">
              <CodeSandbox demo-name="${demoName}" component-name="${componentName}" :code=${demoCodeDefName} />
            </div>
            <div class="tdesign-demo-item__body">
              <${demoDefName} />
            </div>
          </td-doc-demo>
        `;

        // eslint-disable-next-line no-param-reassign
        tokens.tttpl = tpl;

        return `<div class="tdesign-demo-wrapper tdesign-demo-item--${componentName.trim()}-${demoName} tdesign-demo-item--${componentName.trim()}">`;
      }
      if (tokens.tttpl) return `${tokens.tttpl || ''}</div>`;

      return '';
    },
  });

  // 全局替换渲染的 a 标签跳转新窗口
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const aIndex = tokens[idx].attrIndex('target');
    const aHrefIndex = tokens[idx].attrIndex('href');

    // skip anchor
    const isAnchor = tokens[idx].attrs[aHrefIndex][1].indexOf('#') === 0;

    if (aIndex < 0) {
      !isAnchor && tokens[idx].attrPush(['target', '_blank']); // add new attribute
    } else {
      !isAnchor && (tokens[idx].attrs[aIndex][1] = '_blank'); // replace value of existing attr
    }

    // pass token to default renderer.
    return self.renderToken(tokens, idx, options, env, self);
  };
}
