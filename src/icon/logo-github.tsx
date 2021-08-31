import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-logo-github`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 64C264.62933312 64 64 269.66302912 64 523.32558144 64 726.2709312 192.352 898.441472 370.39466688 959.1872832 392.75733312 963.4360448 400 949.1969472 400 937.101376L400 851.5902656C275.38133312 879.3794624 249.43466688 797.3898432 249.43466688 797.3898432 229.05066688 744.2994624 199.66933312 730.1752 199.66933312 730.1752 159.01333312 701.6587392 202.768 702.2711744 202.768 702.2711744 247.75466688 705.4864512 271.424 749.6199872 271.424 749.6199872 311.37066688 819.8202432 376.21866688 799.5333632 401.792 787.7822848 405.78666688 758.1175104 417.39733312 737.8306304 430.24 726.3857664 330.74666688 714.7112384 226.13866688 675.3240704 226.13866688 499.36409664 226.13866688 449.18277696 243.648 408.22624576 272.28266688 376.07345536 267.65333312 364.47548416 252.30933312 317.73910656 276.65066688 254.50528512 276.65066688 254.50528512 314.28266688 242.18004864 399.888 301.5861568 435.616 291.40443968 473.92 286.31358144 512 286.12219584 550.08 286.31358144 588.42133312 291.40443968 624.224 301.5861568 709.7546688 242.18004864 747.312 254.50528512 747.312 254.50528512 771.6906688 317.77738368 756.3466688 364.51376128 751.7173312 376.07345536 780.464 408.22624576 797.824 449.22105408 797.824 499.36409664 797.824 675.7833984 693.0293312 714.634688 593.27466688 726.0029952 609.328 740.2420864 624 768.1843904 624 811.054784L624 937.101376C624 949.3117824 631.168 963.6657024 653.904 959.1490048 831.7973312 898.3266432 960 726.1943808 960 523.32558144 960 269.66302912 759.408 64 512 64Z"/></svg>;
  },

});
