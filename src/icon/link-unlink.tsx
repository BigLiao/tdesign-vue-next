import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-link-unlink`;

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
          d="M698.3712576 703.9676992L711.7644992 895.5 647.9204032 899.964416 634.52715968 708.4321152 698.3712576 703.9676992ZM338.64545024 482.13345024L383.89345024 527.38145024 233.503744 677.8239296 369.26824576 813.5884352 519.63745024 663.1254528 564.94945024 708.4374528 425.4939488 847.8723968C392.16920896 881.1971392 344.89289088 887.9508992 319.89933568 862.957344L184.13483392 727.1928448C159.14127936 702.1992896 165.89503936 654.9229696 199.21977856 621.59822912L338.64545024 482.13345024ZM716.8430208 634.6853568L902.3007808 684.3786112 885.7363648 746.1978688 700.2786048 696.504608 716.8430208 634.6853568ZM727.1928448 184.13483392L862.957344 319.89933568C887.9508992 344.89289088 881.1971392 392.16920896 847.8723968 425.4939488L700.6934528 572.69345024 655.3814528 527.38145024 813.5884352 369.26824576 677.8239296 233.503744 519.63745024 391.63745024 474.38945024 346.38945024 621.59822912 199.21977856C654.9229696 165.89503936 702.1992896 159.14127936 727.1928448 184.13483392ZM144.5644192 296.24374528L330.02217728 345.9370016 313.45775872 407.75625472 128 358.0629984 144.5644192 296.24374528ZM389.69694976 132.51891328L403.09019328 324.05121088 339.24609344 328.51562496 325.85285056 136.98332736 389.69694976 132.51891328Z"
        />
      </svg>
    );
  },
});
