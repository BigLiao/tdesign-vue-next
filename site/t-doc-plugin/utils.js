import chalk from 'chalk';

export function mergeOptions(userOptions) {
  const options = {
    markdownItOptions: {},
    markdownItSetup: () => ({}),
    transforms: {},
    ...userOptions,
  };
  return options;
}
const prefix = '[TDesign:plugin]: ';

export const log = (message) => console.log(prefix + message);
export const info = (message) => console.info(chalk.green(prefix + message));
export const warn = (message) => console.warn(chalk.yellow(prefix + message));
export const error = (message) => console.error(chalk.red(prefix + message));
export const debug = (message) => console.debug(chalk.blue(prefix + message));

export function getRoute(list, docRoutes) {
  list.forEach((item) => {
    if (item.children) {
      return getRoute(item.children, docRoutes);
    }
    return docRoutes.push(item);
  });
  return docRoutes;
}
