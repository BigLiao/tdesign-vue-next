import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-tips`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10,14 L10,15 L6,15 L6,14 L10,14 Z M8,2 C10.7614237,2 13,4.23857625 13,7 C13,8.82209375 12.0253533,10.4165466 10.5689631,11.2904553 C10.5670153,11.2985437 10.5641988,11.3074037 10.5612574,11.3162278 L10.2279241,12.3162278 C10.09181,12.7245699 9.70967119,13 9.27924078,13 L6.72075922,13 C6.29032881,13 5.90818997,12.7245699 5.77207592,12.3162278 L5.43874259,11.3162278 L5.43103693,11.2904553 C3.9746467,10.4165466 3,8.82209375 3,7 C3,4.23857625 5.23857625,2 8,2 Z M8,3 C5.790861,3 4,4.790861 4,7 C4,8.65825021 5.00905751,10.0808224 6.4466492,10.6871933 L6.66666667,12 L9.33333333,12 L9.55278922,10.6874301 C10.9906797,10.0811929 12,8.65846613 12,7 C12,4.790861 10.209139,3 8,3 Z"/></svg>;
  },

});
