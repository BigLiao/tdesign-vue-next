import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-help`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 832L512 896 448 896 448 832 512 832ZM480.52100352 160.00424192C602.02969856 161.98283136 703.9144896 249.51880512 705.731392 382.5904704 706.8484352 464.40355456 682.2520512 510.79350592 616.55204032 579.02203072L599.72323264 596.12440256C537.67977152 658.4129152 515.16942656 693.6795136 512.59799104 755.307168L512.34374976 768 448.34374976 768C448.34374976 682.1730176 474.20526464 633.85931328 541.98058304 563.59786368L558.40266368 546.92047744C622.657312 482.40848896 642.6285952 448.73923392 641.7373568 383.46421696 640.4250624 287.3502368 568.37030208 225.4432224 479.47899648 223.99575808 408.55282688 222.84083008 344.35180224 268.16156992 324.98004352 336.57439744 322.5178144 345.2699456 320.80792384 360.10763264 320.22245696 373.43478144L320 383.027344 256 383.027344C256 362.51791232 258.38568448 336.8501536 263.40113024 319.137728 290.86055168 222.1627104 381.20471936 158.38702208 480.52100352 160.00424192Z"/></svg>;
  },

});
