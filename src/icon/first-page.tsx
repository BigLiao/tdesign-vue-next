import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-first-page`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M320 128L320 896 256 896 256 128 320 128ZM774.6494336 154.20709824L819.9042688 199.46193216 499.04090176 519.13509824 819.0028992 838.6494336 773.748064 883.9042688 431.19903296 541.89659456 427.47525504 537.45542976C420.96120448 528.0778176 420.04808832 515.98731968 424.73423104 505.84257344L424.73423104 505.84257344C426.4746688 502.18397312 428.63631616 499.03261888 431.4133696 496.26509696L431.4133696 496.26509696 774.6494336 154.20709824Z"/></svg>;
  },

});
