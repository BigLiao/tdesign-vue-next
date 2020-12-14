import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-check-circle-filled`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM690.8655168 353.58818368L464.56401024 579.82818368 328.82684416 444.09785152 283.57201024 489.35268544 464.59134592 670.3720192 509.84617984 625.1171872 736.120352 398.8430176 690.8655168 353.58818368Z"/></svg>;
  },

});
