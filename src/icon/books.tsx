import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-books`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M128 240C128 213.49033216 156.653776 192 192 192L704 192C739.3462208 192 768 213.49033216 768 240L768 320 826.1818176 320C864.7413376 320 896 348.653776 896 384L896 832C896 867.3462208 864.7413376 896 826.1818176 896L197.81818176 896C159.25866496 896 128 867.3462208 128 832L128 240ZM256 384L192 384 192 832 832 832 832 384 384 384 384 576 320 512 256 576 256 384ZM704 256L192 256 191.99599936 320.21936256C193.91575104 320.0740832 195.85752832 320 197.81818176 320L704 320 704 256Z"/></svg>;
  },

});