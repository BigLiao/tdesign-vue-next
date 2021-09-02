import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-zoom-out`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  emits: ['click'],

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

  methods: {
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M416 128C575.05800768 128 704 256.94199232 704 416 704 495.52900416 671.7644992 567.52900416 619.64675328 619.64675328L858.5096704 858.5096704 813.2548352 903.7644992 569.33373568 659.8328576C524.93400192 687.812288 472.35742272 704 416 704 256.94199232 704 128 575.05800768 128 416 128 256.94199232 256.94199232 128 416 128ZM416 192C292.28821632 192 192 292.28821632 192 416 192 539.71178368 292.28821632 640 416 640 539.71178368 640 640 539.71178368 640 416 640 292.28821632 539.71178368 192 416 192ZM576 384L576 448 256 448 256 384 576 384Z"/></svg>;
  },

});
