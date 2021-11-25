import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-user`;

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
          d="M512 576C601.92257344 576 686.4307968 599.18159296 759.8745728 639.8946848L760.64 640 797.2160704 658.3197248C818.5708096 669.2764608 832 691.2604224 832 715.261984L832 832C832 867.3462208 803.3462208 896 768 896L256 896C220.653776 896 192 867.3462208 192 832L192 715.2818624C192 691.2790592 205.43055936 669.2941888 226.7869856 658.3380288L263.744 640 264.064 639.936 273.52287808 634.81298816C344.74231744 597.2582336 425.8885952 576 512 576ZM512 640C416.8213984 640 328.5751328 669.6808576 256.01207488 720.2916928L256 832 768 832 768.0210368 720.3147904C695.4517184 669.689888 607.19308032 640 512 640ZM512 159.72895488C618.038672 159.72895488 704 245.69028288 704 351.72895488 704 457.76762624 618.038672 543.72895488 512 543.72895488 405.961328 543.72895488 320 457.76762624 320 351.72895488 320 245.69028288 405.961328 159.72895488 512 159.72895488ZM512 223.72895488C441.307552 223.72895488 384 281.03650688 384 351.72895488 384 422.42140224 441.307552 479.72895488 512 479.72895488 582.692448 479.72895488 640 422.42140224 640 351.72895488 640 281.03650688 582.692448 223.72895488 512 223.72895488Z"
        />
      </svg>
    );
  },
});
