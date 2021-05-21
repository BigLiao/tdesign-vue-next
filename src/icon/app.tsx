import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-app`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 512C867.3462208 512 896 540.653776 896 576L896 832C896 867.3462208 867.3462208 896 832 896L576 896C540.653776 896 512 867.3462208 512 832L512 576C512 540.653776 540.653776 512 576 512L832 512ZM384 512C419.346224 512 448 540.653776 448 576L448 832C448 867.3462208 419.346224 896 384 896L128 896C92.653776 896 64 867.3462208 64 832L64 576C64 540.653776 92.653776 512 128 512L384 512ZM832 576L576 576 576 832 832 832 832 576ZM384 576L128 576 128 832 384 832 384 576ZM704 64C810.0386688 64 896 149.961328 896 256 896 362.038672 810.0386688 448 704 448 597.961328 448 512 362.038672 512 256 512 149.961328 597.961328 64 704 64ZM384 64C419.346224 64 448 92.653776 448 128L448 384C448 419.346224 419.346224 448 384 448L128 448C92.653776 448 64 419.346224 64 384L64 128C64 92.653776 92.653776 64 128 64L384 64ZM704 128C633.307552 128 576 185.307552 576 256 576 326.692448 633.307552 384 704 384 774.692448 384 832 326.692448 832 256 832 185.307552 774.692448 128 704 128ZM384 128L128 128 128 384 384 384 384 128Z"/></svg>;
  },

});
