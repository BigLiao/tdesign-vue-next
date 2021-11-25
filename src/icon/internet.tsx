import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-internet`;

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
          d="M512 64C759.4235648 64 960 264.576432 960 512 960 759.4235648 759.4235648 960 512 960 264.576432 960 64 759.4235648 64 512 64 264.576432 264.576432 64 512 64ZM638.22606848 576.07419008L385.77393152 576.07419008C395.94045184 757.6513408 448.58471552 896 512 896 575.41528448 896 628.05954816 757.6513408 638.22606848 576.07419008ZM321.5474016 576.06637184L133.31800704 576.05163904C157.1124672 717.7622208 258.52469632 833.1461568 392.34098048 876.989728 351.65557696 807.4389952 327.64014848 699.8928 321.5474016 576.06637184ZM890.6819904 576.05163904L702.4525952 576.06637184C696.3598528 699.8928 672.3444224 807.4389952 631.63928064 876.9521984 765.4753024 833.1461568 866.8875328 717.7622208 890.6819904 576.05163904ZM392.38911808 146.9993152L388.02937024 148.451472C236.7837056 200.01202112 128 343.30211264 128 512L128 512 320 512 320.11929088 493.99317824C322.02325312 350.91520448 346.69427584 224.99882432 392.38911808 146.9993152ZM512 128L505.9744512 128.4179616C438.07961664 137.8569312 384 305.98200896 384 512L384 512 640 512C640 299.922656 582.692448 128 512 128L512 128ZM631.65901952 147.01027328L636.96861568 156.54154496C681.0717504 238.46589504 704 367.26339264 704 512L704 512 896 512C896 341.70330368 785.1445632 197.29828224 631.65901952 147.01027328Z"
        />
      </svg>
    );
  },
});
