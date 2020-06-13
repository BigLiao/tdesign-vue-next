import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = prefix + '-icon-' + 'more';

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M8,4 C9.1,4 10,3.1 10,2 C10,0.9 9.1,0 8,0 C6.9,0 6,0.9 6,2 C6,3.1 6.9,4 8,4 Z M8,6 C6.9,6 6,6.9 6,8 C6,9.1 6.9,10 8,10 C9.1,10 10,9.1 10,8 C10,6.9 9.1,6 8,6 Z M8,12 C6.9,12 6,12.9 6,14 C6,15.1 6.9,16 8,16 C9.1,16 10,15.1 10,14 C10,12.9 9.1,12 8,12 Z"/></svg>
  }
 
});
