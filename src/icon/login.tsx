import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-login`;

export default Vue.extend({
  name,

  props: {
    // xs/small/middle/large/xl/18px/2em
    size: {
      type: String,
    },
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): object {
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M256 896L256 704 320 704 319.99984704 832 831.9998464 832 832 192 319.99984704 192 320 320 256 320 256 128 864 128C881.6731136 128 896 142.32688832 896 160L896 864 896 864C896 879.7094336 884.6799872 892.7749376 869.7520384 895.4844352L864 896 864 896 256 896ZM512.23190208 279.954544L714.9576384 482.13667776 719.3806784 485.83325824 719.504192 485.9569408C730.5517184 497.065104 731.7355328 514.26444416 723.0853888 526.67829312L719.3806784 531.0879232 512 737.3365952 466.74516608 692.08176 614.86948928 544.8245952 128.63984704 544.76454784 128.63984704 480.76454784 623.06148928 480.8245952 466.97706816 325.20937792 512.23190208 279.954544Z"/></svg>;
  },

});
