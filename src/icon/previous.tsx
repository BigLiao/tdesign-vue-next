import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-previous`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M256 128L256 896 192 896 192 128 256 128ZM766.3476864 128.6047584C791.0900416 128.6047584 811.1476864 148.66240128 811.1476864 173.4047584L811.1476864 850.7236736C811.1476864 860.7143872 807.80816 870.418432 801.659936 878.293312 786.4336448 897.7957312 758.2804672 901.2622144 738.778048 886.0359232L324.31767232 562.45071808C320.18930176 559.22754048 316.47220096 555.50977536 313.24976 551.38082944 291.50289408 523.51634688 296.4622016 483.2984032 324.32668352 461.55153664L738.7843584 138.08758272C746.658176 131.94245312 756.359712 128.6047584 766.3476864 128.6047584ZM747.1996864 212.672L363.70286784 512.00464448 747.1996864 811.392 747.1996864 212.672Z"/></svg>;
  },

});
