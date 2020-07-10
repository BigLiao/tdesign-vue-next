import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-next`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12,1.99472656 L12,13.9947266 L11,13.9947266 L11,1.99472656 L12,1.99472656 Z M2.73056641,2.00944934 C2.8866285,2.00944934 3.03821503,2.06160082 3.16124342,2.15761847 L3.16124342,2.15761847 L9.63714456,7.21174276 C10.0725271,7.55153755 10.1500163,8.17994292 9.81022149,8.61532546 C9.75987086,8.67984024 9.70179115,8.73793032 9.63728536,8.78829247 L9.63728536,8.78829247 L3.16134199,13.8443113 C2.8566167,14.0822221 2.41672326,14.0280582 2.17881248,13.723333 C2.08274649,13.6002879 2.03056641,13.4486623 2.03056641,13.2925574 L2.03056641,13.2925574 L2.03056641,2.70944934 C2.03056641,2.32285001 2.34396708,2.00944934 2.73056641,2.00944934 Z M3.03,3.324 L3.03,12.677 L9.02189168,8.00007257 L3.03,3.324 Z"/></svg>;
  },

});
