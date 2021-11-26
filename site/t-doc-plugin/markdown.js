import MarkdownIt from 'markdown-it';
import installMarkdownPlugins from './plugins';

function getRenderInfo(source, md) {
  const titleLocation = source.search(/[\r\n]/);
  const describeLocation = source.split(/[\r\n]#+\s|:::\s/)[0].length || titleLocation;
  const propsRegLocation = source.search(/#+\s*属性配置\n|(#+\s*\S*\s*props\n)/i);

  const title = source.slice(2, titleLocation) || '';
  const description = source.slice(titleLocation, describeLocation).trim() || '';
  const contentSource = source.slice(describeLocation).trim() || '';

  let demoMd = source;
  let apiMd = '';
  let content = md.render(contentSource).replace(/<!--[\s\S]+-->/g, '');
  // 有 props 说明是组件文档
  const isComponent = propsRegLocation !== -1;
  if (isComponent) {
    demoMd = source.slice(describeLocation, propsRegLocation);
    apiMd = source.slice(propsRegLocation);
    content = md.render(`\${toc}\r\n${demoMd}`).replace(/<!--[\s\S]+-->/g, '');
  }

  return {
    title,
    description,
    content,
    isComponent,
    api: md.render(`\${toc}\r\n${apiMd}`).replace(/<!--[\s\S]+-->/g, ''),
  };
}

export function createMarkdown(options) {
  const md = new MarkdownIt({
    html: true,
    ...options.markdownItOptions,
  });
  installMarkdownPlugins(md);
  options.markdownItSetup(md);

  return (raw, id) => {
    const { transforms } = options;

    // eslint-disable-next-line no-param-reassign
    if (transforms.before) raw = transforms.before(raw, id);

    let html = md.render(`\${toc}\r\n${raw}`);

    const renderInfo = getRenderInfo(raw, md);

    if (transforms.after) html = transforms.after(html, id, renderInfo, md);

    return html;
  };
}
