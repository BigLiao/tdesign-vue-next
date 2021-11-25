import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-cloud`;

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
          d="M468.50289536 179.12714432C360.97337600000003 198.08749952 279.14376319999997 281.07169152 248.3294528 387.5465056 143.53262080000002 406.23816576 64 497.83116352 64 608 64 731.7117824 164.28821760000005 832 288 832L736.1279999999999 831.9688384C859.71178368 832 960 731.7117824 960 608 960 509.20239488 896.0382112 425.3438656 807.26471616 395.574496L794.25395968 391.6582944C745.2460352 247.01926976 608.79153792 154.39047104 468.50289536 179.12714432ZM479.61637887999996 242.15484032C582.09134912 224.08573824 686.1124 289.70146816 729.11511232 399.78404736L733.6389088000001 412.19644352 744.65807488 444.71774528 778.57409664 453.709552C847.3794656 472.63577984 896 535.53089472 896 608 896 692.81808 829.99728704 762.2332352 746.63122304 767.6310528L736.12354944 767.9688384 288 768C199.63443840000002 768 128 696.3655616 128 608 128 533.90822464 178.74574080000002 470.36751488 248.90208640000003 452.83288128L259.56719999999996 450.55216384 298.7438336 443.56458304 309.80669439999997 405.3383104C334.87417600000003 318.72093696 399.60371327999997 256.263232 479.61637887999996 242.15484032Z"
        />
      </svg>
    );
  },
});
