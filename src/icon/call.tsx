import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-call`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.90840859,1.99854138 C4.30953494,1.98871725 3.6642011,2.15754877 3.14834447,2.51561508 L2.98142906,2.64199372 C2.63598056,2.87786502 2.3832605,3.21797253 2.23225297,3.62182197 C2.12731211,3.90247229 2.09688941,4.07813444 2.04493539,4.53113966 C1.86272521,6.4794858 2.7721158,8.60862049 4.64238775,10.7109643 C5.89440194,12.1153562 7.46042175,13.1669824 9.06138004,13.6733512 C9.73838761,13.8870492 10.3887789,13.9983066 10.977433,13.9983066 C11.6832721,13.9983066 12.2946802,13.838922 12.7539446,13.5183389 C13.1716703,13.214193 13.5186679,12.636188 13.8466354,11.767271 C14.0074668,11.3411641 13.8600494,10.860211 13.488075,10.5974054 L11.1306479,8.93208691 C10.7416593,8.65730009 10.2128571,8.69499462 9.86673542,9.022119 L9.64529292,9.23883207 L9.39110542,9.50107048 C9.33570599,9.56657588 9.20333098,9.66618657 9.20214086,9.66626224 C8.89541725,9.68905896 8.26436284,9.36196759 7.28984779,8.4096548 L7.02403228,8.1262723 C6.21411628,7.24809146 6.14915319,7.01168124 6.33702043,6.74191251 L6.41045549,6.65203329 C6.48306415,6.55658289 6.65694304,6.30677084 7.02326816,5.77394766 C7.23340182,5.46830636 7.25710449,5.07146464 7.08484586,4.74298371 L6.9566106,4.50057301 C6.06882875,2.83758374 5.5344966,2.0778604 4.98645475,2.00438664 L4.90840859,1.99854138 Z M4.89238489,2.99840231 C4.81018808,2.99712678 4.93679472,3.11273672 5.11061626,3.35346997 C5.36412651,3.7045677 5.68655346,4.24491112 6.07356225,4.96985123 L6.19923286,5.2074092 L5.65539395,5.99542582 C5.64348302,6.01375909 5.63874503,6.02218283 5.64256234,6.01885544 C4.96762334,6.87821042 5.15690998,7.61834789 6.57817782,9.11193393 C7.7505754,10.2580822 8.62606246,10.7118691 9.27097618,10.6638757 C9.62386793,10.641466 9.94702956,10.3982905 10.1404387,10.1622561 C10.2369972,10.0618544 10.3340884,9.9630035 10.4243533,9.87396507 L10.5536751,9.74885031 L12.91106,11.4141438 C12.6462826,12.1156452 12.3858845,12.5493986 12.1733705,12.7041937 C11.9063493,12.8904606 11.4926461,12.9983066 10.977433,12.9983066 C10.4970172,12.9983066 9.94669965,12.904168 9.36266865,12.7198183 C7.93935082,12.2696354 6.52476969,11.3197045 5.38917856,10.0459055 C3.68789465,8.13351813 2.88761264,6.25983675 3.03950952,4.63463897 L3.07164527,4.37714486 C3.09693362,4.1991051 3.12159715,4.0986018 3.1689142,3.97205866 C3.25085896,3.75290836 3.37933031,3.58001323 3.58350003,3.43926514 C3.90980611,3.17205048 4.3273765,3.02935966 4.72375519,3.00273567 L4.89238489,2.99840231 Z"/></svg>;
  },

});
