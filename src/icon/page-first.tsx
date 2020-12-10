import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-page-first`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M229.76 128L229.76 896 293.76 896 293.76 128 229.76 128ZM786.71226432 154.20709824L443.47620159999997 496.26509696C440.69914815999994 499.03261888 438.5375008 502.18397312 436.99155199999996 505.54903744L436.79706304 505.84257344C432.11092032 515.98731968 433.02403647999995 528.0778176 439.53808703999994 537.45542976L443.26186496 541.89659456 785.8108972800001 883.9042688 831.0657312 838.6494336 511.10373375999995 519.13509824 831.96709824 199.46193216 786.71226432 154.20709824Z"/></svg>;
  },

});