import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-wifi`;

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
      return [`${prefix}-icon`, name, CLASSNAMES.SIZE[this.size]];
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
    return (
      <svg
        onClick={this.handleClick}
        class={this.classes}
        style={this.iconStyle}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-opacity=".9"
          fill-rule="evenodd"
          d="M512 704C529.67311168 704 544 718.3268864 544 736 544 753.6731136 529.67311168 768 512 768 494.32688832 768 480 753.6731136 480 736 480 718.3268864 494.32688832 704 512 704ZM511.30364224 576C561.50813376 576 604.96184256 604.90353472 625.93228736 646.9781248L575.01877696 697.9218368C571.95743296 665.426464 544.599872 640 511.30364224 640 478.48214848 640 451.431184 664.7065728 447.73421696 696.5362496L447.616 697.856 396.67499712 646.9781248C416.303248 607.59648064 455.62882368 579.75384448 501.75085248 576.35108736L511.30364224 576ZM511.30364224 448C596.70197248 448 672.3338304 489.8152384 718.841344 554.08784L672.7869824 600.095952C638.61315008 547.09397312 579.05671488 512 511.30364224 512 443.55057024 512 383.9941344 547.09397312 349.82030336 600.095952L303.81324992 554.02248576C350.32473152 489.78689344 425.93426112 448 511.30364224 448ZM511.30364224 320C632.03441984 320 739.7520064 375.71608 810.1466304 462.8384608L764.5374016 508.34088768C706.0092672 432.70114112 614.34383616 384 511.30364224 384 408.26344896 384 316.598016 432.70114112 258.06988096 508.34088768L212.46065344 462.8384608C282.85527616 375.71608 390.57286528 320 511.30364224 320ZM511.30364224 192C667.3530176 192 807.0969408 261.81197184 901.0072832 371.9078048L855.6100288 417.35174848C773.4314048 318.75087552 649.695648 256 511.30364224 256 372.94177856 256 249.22978368 318.7235424 167.05096064 417.28732224L121.6 371.9078048C215.51034688 261.81197184 355.25426496 192 511.30364224 192Z"
        />
      </svg>
    );
  },
});
