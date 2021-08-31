import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-login`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M256.00000704 896L256.00000704 704 320.00000704 704 319.99985408 832 831.9998528 832 832.0000064 192 319.99985408 192 320.00000704 320 256.00000704 320 256.00000704 128 864.0000064 128C881.67312 128 896.0000064 142.32688832 896.0000064 160L896 864 896 864C896 879.7094336 884.6799872 892.7749376 869.7520384 895.4844352L864.0000064 896 864.0000064 896 256.00000704 896ZM491.8570528 286.012576L695.4763584 489.06737344 695.6916544 489.27622784 695.9339264 489.51595584C707.4359616 501.0179936 708.2989056 519.13373888 698.5149952 531.62807424 696.9457344 533.74769728 695.118752 535.69277056 693.0774912 537.38884864L492.43054464 738.5609152 447.46245632 693.5928256 595.94692992 544.76891584 128.63985408 544.76454848 128.63985408 480.76454848 597.09892992 480.76891584 446.88896448 330.98066432 491.8570528 286.012576Z"/></svg>;
  },

});
