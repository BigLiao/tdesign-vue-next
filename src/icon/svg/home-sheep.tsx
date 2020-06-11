import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import '../icon.less';

const name = prefix + '-icon-' + 'home-sheep';

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M33.3 9.2c-.8-.7-1.9-.7-2.7 0l-26 23.3c-.8.8-.7 2.1.1 2.8.3.4.8.6 1.3.6h7V56h15.4V43.2h7.3V56H51V35.9h7c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4L33.3 9.2zm-22 22.7L32 13.4l20.7 18.5H47V52h-7.4V39.2H24.4V52H17V31.9h-5.7z"/></svg>
  }
 
});
