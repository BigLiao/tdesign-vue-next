import chalk from 'chalk';
import ContributorsData from '../../src/_common/contributors/github-contributors.json';

const taskReg = /api|interaction|design|ui|vue-next/;

export function toArray(n) {
  if (!Array.isArray(n)) return [n];
  return n;
}

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

export function getContributors(name) {
  const componentInfo = ContributorsData.web.find((item) => item.name === name);
  if (!componentInfo) {
    return [];
  }

  let { tasks } = componentInfo;
  tasks = tasks.filter((item) => item.name.search(taskReg) !== -1 && item.contributors.length > 0);

  const members = {};
  tasks.forEach((c) => {
    ['contributors', 'pmcs'].forEach((key) => {
      c[key].forEach((m) => {
        if (members[m]) {
          members[m].role.push(c.name);
          members[m].roleName.push(c.fullName);
        } else {
          members[m] = {
            role: [c.name],
            roleName: [c.fullName],
          };
        }
      });
    });
  });

  return Object.keys(members).map((username) => ({
    username: username.split(/github_/).slice(-1)[0],
    roleNames: [...new Set(members[username].roleName)].join('/'),
    ...members[username],
  }));
}

export function getRoute(list, docRoutes) {
  list.forEach((item) => {
    if (item.children) {
      return getRoute(item.children, docRoutes);
    }
    return docRoutes.push(item);
  });
  return docRoutes;
}
