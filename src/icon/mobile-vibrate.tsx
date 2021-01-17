import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-mobile-vibrate`;

export default Vue.extend({
  name,

  props: {
    // small/medium/large/xl/18px/2em
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
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M704 128C739.3462208 128 768 156.653776 768 192L768 832C768 867.3462208 739.3462208 896 704 896L320 896C284.653776 896 256 867.3462208 256 832L256 192C256 156.653776 284.653776 128 320 128L704 128ZM704 192L320 192 320 832 704 832 704 192ZM512 675.3395136C547.346224 675.3395136 576 703.9932928 576 739.3395136 576 774.6857408 547.346224 803.3395136 512 803.3395136 476.653776 803.3395136 448 774.6857408 448 739.3395136 448 703.9932928 476.653776 675.3395136 512 675.3395136ZM896 256L896 768 832 768 832 256 896 256ZM192 256L192 768 128 768 128 256 192 256Z"/></svg>;
  },

});
