/* eslint-disable indent */
/* eslint-disable no-param-reassign */
import path from 'path';
import fs from 'fs';
import { getContributors } from './utils';

let demoImports = {};
let demoCodeImports = {};

export default function transforms() {
  return {
    before(source, id) {
      const resouceDir = path.dirname(id);
      const reg = id.match(/examples\/(\w+-?\w+)\/\w+-?\w+\.md/);
      const name = reg && reg[1];
      demoImports = {};
      demoCodeImports = {};

      // 统一换成 iwiki 文档内容
      if (name && source.includes(':: BASE_DOC ::')) {
        const docPath = path.resolve(__dirname, `../../src/_common/docs/web/api/${name}.md`);
        if (fs.existsSync(docPath)) {
          const baseDoc = fs.readFileSync(docPath, 'utf-8');
          source = source.replace(':: BASE_DOC ::', baseDoc);
        } else {
          console.error(`未找到 ${docPath} 文件`);
        }
      }

      // 替换成对应 demo 文件
      source = source.replace(/\{\{\s+(.+)\s+\}\}/g, (demoStr, demoFileName) => {
        const demoPath = path.resolve(resouceDir, `../../examples/${name}/demos/${demoFileName}.vue`);
        if (!fs.existsSync(demoPath)) return '\n<h3>DEMO (🚧建设中）...</h3>';

        return `\n::: demo demos/${demoFileName} ${name}\n:::\n`;
      });

      if (source.includes(':: BASE_PROPS ::')) {
        const apiDoc = fs.readFileSync(path.resolve(resouceDir, './api.md'), 'utf-8');
        source = source.replace(':: BASE_PROPS ::', apiDoc);
      }

      source.replace(/:::\s*demo\s+([\\/.\w-]+)/g, (demoStr, relativeDemoPath) => {
        const demoPathOnlyLetters = relativeDemoPath.replace(/[^a-zA-Z\d]/g, '');
        const demoDefName = `Demo${demoPathOnlyLetters}`;
        const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;
        demoImports[demoDefName] = `import ${demoDefName} from './${relativeDemoPath}.vue';`;
        demoCodeImports[demoCodeDefName] = `import ${demoCodeDefName} from './${relativeDemoPath}.vue?raw';`;
      });

      return source;
    },
    after(_, id, renderInfo, md) {
      const reg = id.match(/examples\/(\w+-?\w+)\/\w+-?\w+\.md/);
      const name = reg && reg[1];

      // 新增设计指南内容
      let designMd = '';
      let designResult = '';
      const designDocPath = path.resolve(__dirname, `../../src/_common/docs/web/design/${name}.md`);

      if (fs.existsSync(designDocPath)) {
        designMd = fs.readFileSync(designDocPath, 'utf-8');
      } else {
        designMd = '<h3>文档 (🚧建设中）...</h3>';
      }

      designResult = md.render(`\${toc}\r\n${designMd}`);

      const demoImportsStr = Object.keys(demoImports)
        .map((key) => demoImports[key])
        .join('\n');
      const demoDefsStr = Object.keys(demoImports).join(',');
      const demoCodeImportsStr = Object.keys(demoCodeImports)
        .map((demoCodeDefName) => demoCodeImports[demoCodeDefName])
        .join('\n');
      const demoCodeDefsStr = Object.keys(demoCodeImports).join(',');

      const { title, description, content, api, isComponent } = renderInfo;

      const vueSource = `
        <template>
          <td-doc-content ref="tdDocContent" page-status="hidden">
            <td-doc-header slot="doc-header" ref="tdDocHeader"></td-doc-header>
            ${
              isComponent
                ? `
              <td-doc-tabs ref="tdDocTabs" :tab="tab"></td-doc-tabs>
              <div v-show="tab === 'demo'" name="DEMO">
                ${content}
                <td-contributors platform="web" framework="vue" component-name="${name}"></td-contributors>
              </div>
              <div v-show="tab === 'api'" name="API">${api}</div>
              <div v-show="tab === 'design'" name="DESIGN">${designResult}</div>
              `
                : `<div name="DOC">${content}</div>`
            }
            <td-doc-footer slot="doc-footer"></td-doc-footer>
          </td-doc-content>
        </template>

        <script>
          import { defineComponent } from 'vue';
          ${demoImportsStr}
          ${demoCodeImportsStr}
          import Prismjs from 'prismjs';
          import 'prismjs/components/prism-bash.js';
          import 'prismjs/components/prism-javascript.js';
          import 'tdesign-site-components/lib/styles/prism-theme.less';
          import 'tdesign-site-components/lib/styles/prism-theme-dark.less';

          export default defineComponent({
            props: {
              docType: String,
            },

            components: {
              ${demoDefsStr}
            },

            data() {
              return {
                ${demoCodeDefsStr}
              };
            },

            computed: {
              tab: {
                get() {
                  return this.$route.query.tab || 'demo';
                },
                set(v) {
                  if (this.$route.query.tab !== v) {
                    this.$router.push({ query: { tab: v } });
                  }
                }
              },
            },

            mounted() {
              const { tdDocContent, tdDocHeader, tdDocTabs, tdContributors } = this.$refs;
              
              ${isComponent ? 'tdDocTabs.onchange = ({ detail: currentTab }) => this.tab = currentTab;' : ''};
              ${isComponent ? 'tdDocHeader.issueInfo = {};' : ''};
              ${isComponent ? `tdContributors.contributors = ${JSON.stringify(getContributors(name) || [])};` : ''};
              tdDocHeader.docType = this.docType;
              tdDocHeader.docInfo = {
                title: \`${title}\`,
                desc: \`${description}\`
              };

              document.querySelector('td-doc-content').initAnchorHighlight();

              Prismjs.highlightAll();

              this.$emit('loaded', () => {
                tdDocContent.pageStatus = 'show';
              });
            },

            beforeDestroy() {
              document.querySelector('td-doc-content').resetAnchorHighlight();
            },
          });
        </script>
      `;

      return vueSource;
    },
  };
}
