import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-stop`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8,13 L8,14 L7,14 L7,13 L8,13 Z M7.50814068,2.50006628 C9.40671404,2.53098174 10.9986639,3.89873133 11.027053,5.9779761 C11.0445068,7.25630554 10.6601883,7.98114853 9.63362563,9.04721923 L9.37067551,9.31444379 C8.40124643,10.2877018 8.04952229,10.8387424 8.00934361,11.8016745 L8.00537109,12 L7.00537109,12 C7.00537109,10.6589534 7.40945726,9.90405177 8.46844661,8.80621662 L8.72504162,8.54563246 C9.7290205,7.53763264 10.0410718,7.01155053 10.0271462,5.99162839 C10.0066416,4.48984745 8.88078597,3.52255035 7.49185932,3.49993372 C6.38363792,3.48188797 5.38049691,4.19002453 5.07781318,5.25897496 C5.03934085,5.3948429 5.01262381,5.62668176 5.00347589,5.83491846 L5,5.98480225 L4,5.98480225 C4,5.66434238 4.03727632,5.26328365 4.11564266,4.986527 C4.54469612,3.47129235 5.95632374,2.47479722 7.50814068,2.50006628 Z"/></svg>;
  },

});
