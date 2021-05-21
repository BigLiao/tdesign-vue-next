import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-gender-female`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    classes(): ClassName {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): Record<string, any> {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M480 64C603.71178368 64 704 164.28821632 704 288 704 400.82603392 620.58456704 494.16934912 512.06079424 509.72285184L512 576 640 576 640 640 512 640 512 896 448 896 448 640 320 640 320 576 448 576 448.003184 509.73201216C339.44821888 494.20603264 256 400.84820416 256 288 256 164.28821632 356.28821632 64 480 64ZM480 128C391.63444032 128 320 199.63444032 320 288 320 376.36555968 391.63444032 448 480 448 568.36555968 448 640 376.36555968 640 288 640 199.63444032 568.36555968 128 480 128Z"/></svg>;
  },

});
