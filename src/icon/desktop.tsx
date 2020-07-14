import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-desktop`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13,3 C13.5522847,3 14,3.44771525 14,4 L14,10 C14,10.5522847 13.5522847,11 13,11 L8.514,11 L8.5146979,12 L12,12 L12,13 L4,13 L4,12 L7.5146979,12 L7.514,11 L3,11 C2.44771525,11 2,10.5522847 2,10 L2,4 C2,3.44771525 2.44771525,3 3,3 L13,3 Z M13,4 L3,4 L3,10 L13,10 L13,4 Z"/></svg>;
  },

});
