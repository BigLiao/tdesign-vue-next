import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-cloud`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.67964226,2.79886163 C10.359791,3.09511718 11.6383787,4.39174518 12.1198523,6.05541415 C13.7573028,6.34747134 15,7.77861193 15,9.5 C15,11.4329966 13.4329966,13 11.5,13 L4.498,12.9995131 C2.56700338,13 1,11.4329966 1,9.5 C1,7.95628742 1.99940295,6.6459979 3.38648881,6.1808515 L3.58978188,6.11966085 C4.3555307,3.85967609 6.48763222,2.41235111 8.67964226,2.79886163 Z M8.50599408,3.78366938 C6.90482267,3.50133966 5.27949375,4.52658544 4.60757637,6.24662574 L4.53689205,6.44056943 L4.36471758,6.94871477 L3.83477974,7.08921175 C2.75969585,7.38493406 2,8.36767023 2,9.5 C2,10.8252825 3.03129239,11.9098943 4.33388714,11.9942352 L4.49806954,11.9995131 L11.5,12 C12.8807119,12 14,10.8807119 14,9.5 C14,8.34231601 13.2070978,7.34949242 12.1109049,7.07551377 L11.9442625,7.03987756 L11.3321276,6.93069661 L11.1592704,6.3334111 C10.767591,4.98001464 9.75619198,4.004113 8.50599408,3.78366938 Z" transform="matrix(-1 0 0 1 16 0)"/></svg>;
  },

});
