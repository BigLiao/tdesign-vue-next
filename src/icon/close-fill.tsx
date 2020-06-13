import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = prefix + '-icon-' + 'close-fill';

export default Vue.extend({
  name,
 
  props: {
    // xs/small/middle/large/xl/18px
    size: {
      type: String,
      default: 'middle'
    }
  },

  computed: {
    classes(): Array<string|object> {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ]
    },
    iconStyle(): Object {
      if (['xs', 'small', 'middle', 'large', 'xl'].includes(this.size)) return {}
      return {
        'font-size': this.size
      }
    }
  },
 
  render(h: CreateElement) {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M8,1.33333333 C11.6818983,1.33333333 14.6666667,4.31810167 14.6666667,8 C14.6666667,11.6818983 11.6818983,14.6666667 8,14.6666667 C4.31810167,14.6666667 1.33333333,11.6818983 1.33333333,8 C1.33333333,4.31810167 4.31810167,1.33333333 8,1.33333333 Z M9.88561808,5.17157288 L8,7.05624815 L6.11438192,5.17157288 L5.17157288,6.11438192 L7.05742666,7.99882149 L5.17157288,9.88561808 L6.11438192,10.8284271 L8.00070711,8.94210193 L9.88561808,10.8284271 L10.8284271,9.88561808 L8.94328045,7.9995286 L10.8284271,6.11438192 L9.88561808,5.17157288 Z"/></svg>
  }
 
});
