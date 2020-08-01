import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-user`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,9 C9.40504021,9 10.7254812,9.36221239 11.8730402,9.99835445 L11.885,10 L12.4565011,10.2862457 C12.7901689,10.4574447 13,10.8009441 13,11.1759685 L13,13 C13,13.5522847 12.5522847,14 12,14 L4,14 C3.44771525,14 3,13.5522847 3,13 L3,11.1762791 C3,10.8012353 3.20985249,10.4577217 3.54354665,10.2865317 L4.121,10 L4.126,9.999 L4.27379497,9.91895294 C5.38659871,9.3321599 6.6545093,9 8,9 Z M8,10 C6.51283435,10 5.13398645,10.4637634 4.00018867,11.2545577 L4,13 L12,13 L12.0003287,11.2549186 C10.8664331,10.4639045 9.48739188,10 8,10 Z M8,2.49576492 C9.65685425,2.49576492 11,3.83891067 11,5.49576492 C11,7.15261916 9.65685425,8.49576492 8,8.49576492 C6.34314575,8.49576492 5,7.15261916 5,5.49576492 C5,3.83891067 6.34314575,2.49576492 8,2.49576492 Z M8,3.49576492 C6.8954305,3.49576492 6,4.39119542 6,5.49576492 C6,6.60033441 6.8954305,7.49576492 8,7.49576492 C9.1045695,7.49576492 10,6.60033441 10,5.49576492 C10,4.39119542 9.1045695,3.49576492 8,3.49576492 Z"/></svg>;
  },

});
