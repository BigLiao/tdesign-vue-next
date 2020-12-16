import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-menu-fold`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M896 768L896 832 128 832 128 768 896 768ZM166.4 316.69835776C174.0323744 316.69835776 181.49161728 318.97279616 187.8255008 323.23132288L365.69735744 442.82179264C386.23031488 456.62693312 391.68428736 484.46346112 377.87914688 504.99641792 374.64488448 509.8068704 370.50780992 513.94394496 365.69735744 517.17820736L187.8255008 636.76867712C170.225824 648.6016512 146.36594304 643.9268224 134.53296512 626.32714304 130.27443776 619.99325888 128 612.53401664 128 604.90164224L128 355.09835776C128 333.89062336 145.1922656 316.69835776 166.4 316.69835776ZM192.05362496 403.136L192.05362496 556.8 306.35762496 480 192.05362496 403.136ZM896 448L896 512 448 512 448 448 896 448ZM896 128L896 192 128 192 128 128 896 128Z"/></svg>;
  },

});