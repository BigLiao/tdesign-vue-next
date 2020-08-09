import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-thumb-down`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3,9 C2.44771525,9 2,8.55228475 2,8 L2,3 C2,2.44771525 2.44771525,2 3,2 L11.6944423,2 C12.1760574,2 12.589256,2.34329498 12.6775096,2.816755 L12.6775096,2.816755 L13.9823185,9.816755 C13.993583,9.87718639 13.9992512,9.93852772 13.9992512,10 C13.9992512,10.5522847 13.551536,11 12.9992512,11 L12.9992512,11 L9.875,11 L9.60949566,13.1240347 C9.54694206,13.6244636 9.12154105,14 8.61721778,14 L8.61721778,14 L6.8198039,14 C6.34312288,14 5.93270807,13.6635403 5.83922323,13.1961161 L5.83922323,13.1961161 L5,9 L3,9 Z M11.6944423,3 L6,3 L6,8.909 L6.8198039,13 L8.61721778,13 L8.99221778,10 L12.9992512,10 L11.6944423,3 Z M5,3 L3,3 L3,8 L4.999,8 L5,3 L5,3 Z"/></svg>;
  },

});
