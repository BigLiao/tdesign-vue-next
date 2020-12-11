import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-caret-up`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M115.24769856000003 723.20738432C115.24769856000003 747.94974144 135.30534208000003 768.00738432 160.04769856000004 768.00738432L837.3666112 768.00738432C847.3573312 768.00738432 857.0613696 764.6678592000001 864.9362496 758.51963584 884.4386688000001 743.2933459200001 887.9051584 715.14016512 872.6788672 695.6377472L549.09365888 281.1773695999999C545.87048064 277.04899839999996 542.15271552 273.33189759999993 538.0237696 270.10945919999995 510.15928768000003 248.36259199999995 469.9413433600001 253.32190079999998 448.19447744000007 281.18638079999994L124.73052352000005 695.64405504C118.58539392000006 703.51787264 115.24769856000003 713.2194105599999 115.24769856000003 723.20738432ZM797.9758784 704.0135718399999L199.38387776000005 704.0135718399999 498.64758528000004 320.5625663999999 797.9758784 704.0135718399999Z"/></svg>;
  },

});
