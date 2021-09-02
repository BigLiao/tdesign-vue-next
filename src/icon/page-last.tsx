import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-page-last`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 128L768 896 704 896 704 128 768 128ZM211.04773568 154.20709824L554.2837984 496.26509696C557.06085184 499.03261888 559.2224992 502.18397312 560.768448 505.54903744L560.96293696 505.84257344C565.64907968 515.98731968 564.73596352 528.0778176 558.22191296 537.45542976L554.49813504 541.89659456 211.94910272 883.9042688 166.6942688 838.6494336 486.65626624 519.13509824 165.79290176 199.46193216 211.04773568 154.20709824Z"/></svg>;
  },

});
