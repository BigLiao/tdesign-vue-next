import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-download`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14,14 L3,14 L3,11 L4,11 L4,12.9999262 L13,12.9999262 L13,11 L14,11 L14,14 Z M8.99060514,1.17892623 L8.99149625,10.305 L13.2975561,5.90628734 L13.9664963,6.5752275 L9.00336019,11.6087202 C8.99139789,11.6616587 8.97070717,11.7130946 8.94122154,11.7607693 L8.8903886,11.8291781 L8.87654384,11.8448491 L8.85637174,11.8662588 C8.7355911,11.9864893 8.56467656,12.0256181 8.41126246,11.9837996 C8.31792406,11.9747829 8.22636778,11.9346844 8.15397117,11.8632726 C8.14585876,11.8552706 8.13807175,11.8469452 8.13062907,11.8383167 L8.13021363,11.8378351 C8.09586474,11.7980136 8.06884775,11.7542105 8.04910885,11.7081295 L3.02410889,6.65812997 L3.71856761,5.96367125 L7.99149625,10.262 L7.99060514,1.17892623 L8.99060514,1.17892623 Z"/></svg>;
  },

});
