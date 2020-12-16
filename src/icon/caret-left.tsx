import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-caret-left`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M658.624 128.65788352C683.3663564799999 128.65788352 703.424 148.7155264 703.424 173.45788352L703.424 850.7768C703.424 860.7675136 700.08447488 870.471552 693.93625152 878.346432 678.7099616 897.8488512 650.5567808 901.3153408 631.05436288 886.0890496L216.59398399999998 562.5038432C212.4656192 559.28066496 208.748512 555.56289984 205.52607360000002 551.43395392 183.77920640000002 523.569472 188.73851519999994 483.35152768 216.6029952 461.60466176L631.06067072 138.14070784C638.9344883199999 131.99557824 648.63602624 128.65788352 658.624 128.65788352ZM639.424 811.328L639.424 212.8 255.97918271999993 512.0577696 639.424 811.328Z"/></svg>;
  },

});