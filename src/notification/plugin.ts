import { VueConstructor } from 'vue';
import NotificationList from './notificationList';
import { getAttach } from '../utils/dom';
import { NotificationProps } from './type/index';

let seed = 0;
// 存储不同 attach 和 不同 placement 消息列表实例
const instanceMap: Map<Element, object> = new Map();

const Plugin = function (options: NotificationProps) {
  seed += 1;
  const hackOptions = Object.assign({
    placement: 'top-right',
    zIndex: 6000,
    attach: 'body',
    id: seed,
  }, options);
  hackOptions.default = options.content ? options.content : '';

  const _a = getAttach(hackOptions.attach);
  if (!instanceMap.get(_a)) {
    instanceMap.set(_a, {});
  }
  let _p = instanceMap.get(_a)[hackOptions.placement];
  if (!_p) {
    const List = new NotificationList({
      propsData: {
        placement: hackOptions.placement,
      },
    });
    List.add(hackOptions);
    List.$mount();
    instanceMap.get(_a)[hackOptions.placement] = List;
    _a.appendChild(List.$el);
    _p = instanceMap.get(_a)[hackOptions.placement];
  } else {
    _p.add(hackOptions);
  }

  return new Promise((resolve) => {
    _p.$nextTick(() => {
      const list = _p.$children;
      resolve(list[list.length - 1]);
    });
  });
};

['success', 'warning', 'info', 'error'].forEach((theme) => {
  Plugin[theme] = (options: NotificationProps) => {
    const hackOptions = Object.assign(options, { theme });
    return Plugin(hackOptions);
  };
});

Plugin.close = function (promise: Promise<{close: Function}>) {
  promise.then(instance => instance.close());
};

Plugin.closeAll = function () {
  instanceMap.forEach((attach) => {
    Object.keys(attach).forEach((placement) => {
      attach[placement].removeAll();
    });
  });
};

Plugin.install = (Vue: VueConstructor) => {
  /* eslint-disable no-param-reassign */
  Vue.prototype.$notify = Plugin;
};

export default Plugin;
