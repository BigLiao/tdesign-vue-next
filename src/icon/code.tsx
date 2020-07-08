import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-code`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px/2em
    size: {
      type: String,
    },
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): object {
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.09885282,1.99874931 L10.0647786,2.25756836 L6.9589501,13.8486783 L5.99302428,13.5898592 L9.09885282,1.99874931 Z M11.7496338,3.72824124 L14.6436659,7.03928841 C15.1028892,7.56468346 15.135565,8.33084062 14.7404328,8.89058525 L14.6492131,9.00720819 L11.7514829,12.3604515 L10.994855,11.7066058 C13.0756285,9.37410047 14.0800833,8.14723697 14.0082194,8.02601531 L10.996704,4.38634209 L11.7496338,3.72824124 Z M3.87328485,3.73805622 L4.67352385,4.33773742 L2.01204427,8 C1.95768754,8.11086228 2.8448474,9.34896002 4.67352385,11.7142932 L4.67352385,11.7142932 L3.87328485,12.3139744 L1.33406576,8.92553711 L1.24896048,8.7991432 C0.936907789,8.28084658 0.965276215,7.61862127 1.33406576,7.1264935 L1.33406576,7.1264935 L3.87328485,3.73805622 Z"/></svg>;
  },

});
