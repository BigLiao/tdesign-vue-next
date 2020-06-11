import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import '../icon.less';

const name = prefix + '-icon-' + 'arrow-right';

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
        't-icon',
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path  d="M5.13525391 2.73120117L10.4040527 8 5.13525391 13.2687988"/></svg>
  }
 
});
