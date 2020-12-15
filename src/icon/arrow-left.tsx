import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-arrow-left`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M417.03032256 115.54204096L462.28515648 160.79687488 173.869792 447.99001024 960 448 960 512 172.909792 511.99001024 461.3837888 799.9843776 416.12895488 845.2392064 73.5799232 503.23153728 69.86835072 498.80793088C63.371730496 489.46881664 62.434170304 477.43421376 67.0540128 467.31061056L67.0540128 467.31061056 68.25209792 464.95091392C68.73431872 464.0918656 69.25930112 463.25031936 69.9208992 462.26398272 71.04151808 460.6195456 72.3326528 459.0566304 73.79425984 457.60003968L73.79425984 457.60003968 417.03032256 115.54204096Z"/></svg>;
  },

});
