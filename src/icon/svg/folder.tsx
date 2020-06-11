import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import '../icon.less';

const name = prefix + '-icon-' + 'folder';

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
    return <svg class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#7a8193" d="M353.2 224l44.8 56 19.2 24H896v496H128V224h225.2m30.8-64H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32H448l-64-80z"/></svg>
  }
 
});
