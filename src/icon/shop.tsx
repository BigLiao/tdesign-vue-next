import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-shop`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.1328742,2 C12.6738867,2 13.1533009,2.27925639 13.3201567,2.69158617 L14.9388199,6.69158617 C15.151416,7.2169483 14.7921946,7.78092003 14.1364766,7.95125229 C14.0914973,7.96293632 14.0457903,7.97254631 13.9995804,7.98005379 C13.9999185,7.98641224 14,7.99319819 14,8 L14,13 C14,13.5522847 13.4627417,14 12.8,14 L3.2,14 C2.5372583,14 2,13.5522847 2,13 L2,8 L2.0010196,7.98040387 C1.43006046,7.88853123 1,7.48450435 1,7 C1,6.88784527 1.02354851,6.77648959 1.06965976,6.67059439 L2.81142911,2.67059439 C2.98629145,2.26902033 3.45905313,2 3.98989517,2 L12.1328742,2 Z M6.28739161,8.0642358 C5.85079726,8.44119363 5.2816254,8.66854474 4.65935284,8.66854474 C3.95915225,8.66854474 3.39012897,8.41136378 2.99931333,8.07065586 L3,13 L13.0003003,13 L13.0022908,8.30408288 C12.5818538,8.6528572 11.9770933,8.84556788 11.2763684,8.84556788 C10.6289946,8.84556788 10.0390919,8.59950507 9.59508513,8.19580438 C9.16503187,8.54793179 8.61530847,8.75853351 8.0163964,8.75853351 C7.34554777,8.75853351 6.73641375,8.49430185 6.28739161,8.0642358 Z M14,7 L12.3106012,3 L3.81695944,3 L2,7 L2.40798807,7.00097007 C2.40798767,7.00064664 2.40798746,7.00032328 2.40798746,7 L3.41100432,7.00047204 C3.67996343,7.40325606 4.13867739,7.66854474 4.65935284,7.66854474 C5.07102833,7.66854474 5.44396934,7.50270274 5.71501153,7.23418306 L5.71398746,7.23154474 L5.80624606,7.15376402 C5.95014813,7.02582816 6.10934435,6.8640884 6.28383472,6.66854474 C6.49867769,6.85700827 6.64991194,7.02811867 6.80824581,7.17922546 L6.919,7.279 L7.01250248,7.37258686 C7.2730593,7.60811307 7.61720842,7.7531394 7.99515165,7.75838613 L8.0163964,7.75853351 L8.10298746,7.75354474 L8.111,7.753 L8.0163964,7.75853351 L8.113,7.753 L8.121,7.753 L8.143,7.751 L8.142,7.752 L8.17631027,7.75010976 C8.49156556,7.71670022 8.77767373,7.58563077 9.00380976,7.38772646 C9.21538076,7.20760407 9.41274899,6.96916651 9.59425378,6.66854474 C9.79368659,6.95838733 9.98812179,7.19315009 10.1775594,7.37283304 L10.261,7.446 L10.289,7.471 L10.26,7.446 L10.3145031,7.4952629 C10.3720061,7.54375043 10.433252,7.58794752 10.4977454,7.62737531 C10.6127539,7.70006876 10.7251357,7.75125429 10.8355822,7.78111131 C10.840842,7.78131437 10.84609,7.78289611 10.8513501,7.78444971 C10.8660341,7.788936 10.8805735,7.79223921 10.8950792,7.79516983 C11.016584,7.82854863 11.1444887,7.84556788 11.2763684,7.84556788 C11.8925538,7.84556788 12.4051191,7.51210604 12.6273109,7.0003423 L12.9975971,7.00052239 C12.9975564,6.99989431 12.9975152,6.99926755 12.9974736,6.99864211 L13.54,6.999 L13.6239875,6.99918799 L14,7 Z"/></svg>;
  },

});