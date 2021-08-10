import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-fullsreen`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

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

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M544.10643712 498.65953024L767.8163968 722.317536 767.27904 571.90583232 831.27904 571.90583232 832.1116992 799.284192 832.1670656 800.3356096 832.1670528 800.4109248 831.643264 806.1676224C830.6200064 811.7658048 828.1435328 816.8445504 824.6205184 821.009024L824.6205184 821.009024 820.79712 824.8152576 816.3533568 827.9758976C813.202848 829.8300352 809.6915776 831.1570688 805.9109184 831.8298368L805.9109184 831.8298368 800.2757888 832.3856448 800.167104 832.3355712 572.32706496 831.977728 572.32706496 767.977728 723.1951296 768.2059392 498.8516032 543.91436416 544.10643712 498.65953024ZM163.83733184 131.27055616L164.28454656 131.352688 391.69887424 131.6889472 391.69887424 195.6889472 241.77453248 195.44724288 462.25195392 415.8984064 416.99712 461.15324032 196.02189504 240.20427328 196.61645056 391.75055616 132.61645056 391.75055616 131.83751744 163.27037056 132.33207808 157.53618752C134.98401216 142.64992256 147.98800576 131.32409472 163.83733184 131.27055616L163.83733184 131.27055616Z"/></svg>;
  },

});
