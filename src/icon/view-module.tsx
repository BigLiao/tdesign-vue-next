import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-view-module`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 128C867.3462208 128 896 156.653776 896 192L896 832C896 867.3462208 867.3462208 896 832 896L192 896C156.653776 896 128 867.3462208 128 832L128 192C128 156.653776 156.653776 128 192 128L832 128ZM192 832L320 832 320 384 192 384 192 832ZM832 832L832 384 384 384 384 832 832 832ZM832 192L192 192 192 320 832 320 832 192Z"/></svg>;
  },

});