import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-help-circle`;

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
          d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM512 160C317.59576832 160 160 317.59576832 160 512 160 706.4042304 317.59576832 864 512 864 706.4042304 864 864 706.4042304 864 512 864 317.59576832 706.4042304 160 512 160ZM544 672L544 736 480 736 480 672 544 672ZM511.94934848 316.79357824C580.86566208 317.87753152 638.94855808 369.30255552 639.97972736 442.25242048 640.6040192 486.41802816 626.86304896 511.80632384 591.32161984 547.68326784L581.23240896 557.61406016C550.12829504 587.77674496 545.85718848 604.2392832 544.33294784 632.61727168L544.14543296 639.97426496 479.84877568 640C479.84877568 594.00480064 493.105152 564.48261312 529.43594048 527.7943712L539.69683072 517.6924928C572.34315648 486.03252928 576.87187904 472.9806432 576.43752576 442.25242048 575.80742976 397.67644416 547.8533504 380.3909248 512 380.3909248 478.19034496 380.3909248 459.7961696 389.55235008 450.58499584 420.97361536 449.55016384 424.503648 448.7590048 430.9195872 448.4281024 436.88934272L448.25864064 442.58695936 384 442.58695936C384 431.38724224 385.3298528 417.56690432 388.246704 407.6169056 403.89780352 354.22768704 455.376064 315.90376256 511.94934848 316.79357824Z"
        />
      </svg>
    );
  },
});
