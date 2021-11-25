import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-heart-filled`;

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
          d="M210.30053271159517 297.145843374597C130.28349666357997 377.16287942261226 126.78270851409263 505.59765416428 201.72662653320066 589.760425365734L209.22716950791266 597.7399147301719 474.28902419058386 862.8293096946197C495.11394567597847 883.6603134297034 528.8827434803663 883.6620666019724 549.7117872285896 862.8351860348141 549.7124402558442 862.8345330075595 549.7130932830987 862.833879980305 549.7117867760412 862.8312674187384L813.6983182681695 598.8447359266102 813.6983182681695 598.8447359266102 821.2272867092111 590.9001923449839C897.2161433707688 505.597655521925 893.7153561263781 377.1628798751607 813.6983196258145 297.14584337459706L805.7537764967367 289.61687538610386 797.3671162669355 282.51116228352436C715.0538938391553 216.2194182256585 597.5788049132503 219.40751945729602 519.8910854038719 289.64122384443874L511.9994261687049 297.14584382714537 504.05488349217535 289.61687448100713C418.75234350127835 213.62801917709447 290.3175687596104 217.1288073265818 210.30053271159517 297.145843374597Z"
        />
      </svg>
    );
  },
});
