import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import '../icon.less';

const name = prefix + '-icon-' + 'list';

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
    return <svg class={this.classes} style={this.iconStyle} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#737987" d="M7 5h14v2H7V5zm0 6h14v2H7v-2zm0 6h8v2H7v-2zm-4 0h2v2H3v-2zm0-6h2v2H3v-2zm0-6h2v2H3V5z"/></svg>
  }
 
});
