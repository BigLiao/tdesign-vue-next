import Vue, { CreateElement, VNode } from 'vue';
import { prefix } from '../../config';
import CLASSNAMES from '../../utils/classnames';
import '../icon.less';

const name = prefix + '-icon-' + 'detail';

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
    return <svg class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#737987" d="M864 160v704H160V160h704m32-64H128c-17.7 0-32 14.3-32 32v768c0 17.7 14.3 32 32 32h768c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z"/><path fill="#737987" d="M360 288h-83v64h83zm0 384h-83v64h83zm0-192h-83v64h83zm383-192H424v64h319zm0 384H424v64h319zm0-192H424v64h319z"/></svg>
  }
 
});
