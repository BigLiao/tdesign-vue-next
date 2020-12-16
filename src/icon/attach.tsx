import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-attach`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M523.28704704 165.64509056C573.20928192 117.37435264 652.6132864 118.04204864 701.7167168 167.14547904 748.2069248 213.6356864 750.6537792 287.49092608 709.05728 336.861664L701.7167168 344.85452096 413.82256192 632.7486784 368.567728 587.49384448 656.461888 299.59968704C680.5413248 275.52024448 680.5413248 236.47975552 656.461888 212.40031296 633.9327392 189.87116736 598.57078592 187.85537536 573.74725952 206.5494624L567.77445312 211.6545536 227.6828896 540.58768832C178.76892544 591.03943424 180.01554368 671.5912576 230.4672896 720.5052224 280.77590272 769.280416 359.4239296 771.1300992 411.87988288 726.4762048L419.93678848 719.0391936 803.3943296 335.58165504 848.6491648 380.8364896 465.19162304 764.2940288C388.31550144 841.1701504 263.97466048 842.1322432 185.91815296 766.4549184 113.12225408 695.877856 108.48364416 581.47709312 173.27284928 505.34925504L181.73319488 496.03855232 186.10260736 491.67500224 523.28704704 165.64509056Z"/></svg>;
  },

});