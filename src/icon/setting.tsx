import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-setting`;

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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 91.54919552L896 301.0037408 896 722.996256 512 932.4508032 128 722.996256 128 301.0037408 512 91.54919552ZM512 164.416L192 338.944 192 684.992 512 859.52 832 684.992 832 338.944 512 164.416ZM512 320C618.038672 320 704 405.961328 704 512 704 618.038672 618.038672 704 512 704 405.961328 704 320 618.038672 320 512 320 405.961328 405.961328 320 512 320ZM512 384C441.307552 384 384 441.307552 384 512 384 582.692448 441.307552 640 512 640 582.692448 640 640 582.692448 640 512 640 441.307552 582.692448 384 512 384Z"/></svg>;
  },

});
