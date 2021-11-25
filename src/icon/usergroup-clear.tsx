import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-usergroup-clear`;

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
          d="M928.619168 664.2355008L973.8740032 709.4903296 883.4093952 799.9545536 973.964128 890.5096704 928.7092928 935.7644992 838.15456 845.2093888 747.5998336 935.7644992 702.3449984 890.5096704 792.8997248 799.9545536 702.4351232 709.4903296 747.689952 664.2355008 838.15456 754.6997184 928.619168 664.2355008ZM640 576C661.7500224 576 683.1832832 577.3562048 704.21984 579.9886624L704.1820288 644.5629632C683.2214656 641.556 661.792448 640 640 640 544.8213984 640 456.57513216 669.6808576 384.01207488 720.2916928L384 832 674.688 832 674.7026368 896 384 896C348.653776 896 320 867.3462272 320 832L320 715.2818624C320 691.2790592 333.43055936 669.2941888 354.7869856 658.3380288L391.744 640 392.064 639.936 401.52287744 634.81298816C472.74231744 597.2582336 553.8885952 576 640 576ZM384 512L384.06414528 576.00000448 384 576C288.8213984 576 200.5751328 605.68085504 128.01207488 656.2916928L128 768 256 768 256 832 128 832C92.653776 832 64 803.3462208 64 768L64 651.2818624C64 627.2790624 77.43055936 605.29418816 98.7869856 594.33803008L135.744 576 136.064 575.936 145.52287808 570.81298816C216.74231744 533.2582336 297.8885952 512 384 512L384 512ZM640 160.48646208C746.0386688 160.48646208 832 246.44779008 832 352.48646208 832 458.52513408 746.0386688 544.48646208 640 544.48646208 533.961328 544.48646208 448 458.52513408 448 352.48646208 448 246.44779008 533.961328 160.48646208 640 160.48646208ZM384.41335936 96.48646208C418.68390592 96.48646208 450.85734976 105.46522752 478.70961152 121.19867968 461.28225408 135.34941824 445.77604928 151.7236832 432.6001472 169.89752256 417.77703424 163.82873856 401.48551168 160.48646208 384.41335936 160.48646208 313.72091136 160.48646208 256.41335936 217.79401408 256.41335936 288.48646208 256.41335936 355.96561728 308.62953792 411.24902976 374.8605696 416.13537536L384.41335936 416.48646208 384.4778176 480.48645184C384.45633216 480.48645888 384.43484608 480.48646208 384.41335936 480.48646208 278.37468736 480.48646208 192.41335936 394.52513408 192.41335936 288.48646208 192.41335936 182.44779008 278.37468736 96.48646208 384.41335936 96.48646208ZM640 224.48646208C569.307552 224.48646208 512 281.79401408 512 352.48646208 512 423.17891008 569.307552 480.48646208 640 480.48646208 710.692448 480.48646208 768 423.17891008 768 352.48646208 768 281.79401408 710.692448 224.48646208 640 224.48646208Z"
        />
      </svg>
    );
  },
});
