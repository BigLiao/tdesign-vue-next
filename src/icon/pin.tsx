import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-pin`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.090949,2.16149101 L14.129526,4.14523809 C14.5034894,4.5091433 14.5347876,5.09941683 14.2014038,5.50082787 L10.613382,9.81923861 L11.2405566,10.4466706 C11.6310809,10.8371948 11.6310809,11.4703598 11.2405566,11.8608841 L9.82634304,13.2750977 C9.43581875,13.665622 8.80265377,13.665622 8.41212947,13.2750977 L5.98946283,10.8521633 L2.10859343,14.3476565 L1.43946283,13.6045117 L5.28146283,10.1441633 L2.75527523,7.61824343 C2.36475093,7.22771913 2.36475093,6.59455416 2.75527523,6.20402986 L4.16948879,4.7898163 C4.56001308,4.39929201 5.19317806,4.39929201 5.58370235,4.7898163 L6.32538201,5.53123861 L10.7819781,2.08697802 C11.1759883,1.78241997 11.734046,1.81418733 12.090949,2.16149101 Z M11.3934842,2.87821773 L6.24068308,6.8605373 L4.87659557,5.49692308 L3.46238201,6.91113664 L9.11923626,12.5679909 L10.5334498,11.1537773 L9.26159957,9.88140524 L13.4321229,4.86191715 L11.3934842,2.87821773 Z"/></svg>;
  },

});
