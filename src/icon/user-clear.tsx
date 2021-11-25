import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-user-clear`;

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
          d="M890.5096704 664.2355008L935.7644992 709.4903296 845.2548352 800 935.7644992 890.5096704 890.5096704 935.7644992 800 845.2548352 709.4903296 935.7644992 664.2355008 890.5096704 754.7451648 800 664.2355008 709.4903296 709.4903296 664.2355008 800 754.7451648 890.5096704 664.2355008ZM512 576C556.20736256 576 599.10615168 581.60267008 640.0250432 592.13668416L640.0929536 658.5799104C599.50824576 646.4916672 556.51222848 640 512 640 416.8213984 640 328.5751328 669.6808576 256.01207488 720.2916928L256 832 640 832 640 896 256 896C220.653776 896 192 867.3462208 192 832L192 715.2818624C192 691.2790592 205.43055936 669.2941888 226.7869856 658.3380288L263.744 640 264.064 639.936 273.52287808 634.81298816C344.74231744 597.2582336 425.8885952 576 512 576ZM512 159.72895488C618.038672 159.72895488 704 245.69028288 704 351.72895488 704 457.76762624 618.038672 543.72895488 512 543.72895488 405.961328 543.72895488 320 457.76762624 320 351.72895488 320 245.69028288 405.961328 159.72895488 512 159.72895488ZM512 223.72895488C441.307552 223.72895488 384 281.03650688 384 351.72895488 384 422.42140224 441.307552 479.72895488 512 479.72895488 582.692448 479.72895488 640 422.42140224 640 351.72895488 640 281.03650688 582.692448 223.72895488 512 223.72895488Z"
        />
      </svg>
    );
  },
});
