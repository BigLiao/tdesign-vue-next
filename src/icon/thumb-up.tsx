import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-thumb-up`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,14 C2.44771525,14 2,13.5522847 2,13 L2,8 C2,7.44771525 2.44771525,7 3,7 L5,7 L5.83922323,2.80388386 C5.93270807,2.33645967 6.34312288,2 6.8198039,2 L8.61721778,2 C9.12154105,2 9.54694206,2.37553644 9.60949566,2.87596527 L9.875,5 L12.9992512,5 C13.551536,5 13.9992512,5.44771525 13.9992512,6 C13.9992512,6.06147228 13.993583,6.12281361 13.9823185,6.183245 L12.6775096,13.183245 C12.589256,13.656705 12.1760574,14 11.6944423,14 L3,14 Z M4.999,8 L3,8 L3,13 L5,13 L5,13 L4.999,8 Z M8.61721778,3 L6.8198039,3 L6,7.095 L6,13 L11.6944423,13 L12.9992512,6 L8.99221778,6 L8.61721778,3 Z"/></svg>;
  },

});
