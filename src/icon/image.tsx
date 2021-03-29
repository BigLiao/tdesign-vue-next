import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-image`;

export default defineComponent({
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 128C867.3462208 128 896 156.653776 896 192L896 832C896 867.3462208 867.3462208 896 832 896L192 896C156.653776 896 128 867.3462208 128 832L128 192C128 156.653776 156.653776 128 192 128L832 128ZM832 192L192 192 192 832 297.344 832 619.26079104 510.12797824 645.376 536.256 645.4903296 536.23549824 832 722.752 832 192ZM619.328 600.576L387.84 832 832 832 832 813.248 619.328 600.576ZM384 256C454.692448 256 512 313.307552 512 384 512 454.692448 454.692448 512 384 512 313.307552 512 256 454.692448 256 384 256 313.307552 313.307552 256 384 256ZM384 320C348.653776 320 320 348.653776 320 384 320 419.346224 348.653776 448 384 448 419.346224 448 448 419.346224 448 384 448 348.653776 419.346224 320 384 320Z"/></svg>;
  },

});
