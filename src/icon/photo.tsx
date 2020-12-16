import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-photo`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M634.15864192 128C657.49888 128 678.9883584 140.70611136 690.2364608 161.1572L742.4 256 896 256C931.3462208 256 960 287.83752896 960 327.11111104L960 824.8888896C960 864.1624704 931.3462208 896 896 896L128 896C92.653776 896 64 864.1624704 64 824.8888896L64 327.11111104C64 287.83752896 92.653776 256 128 256L281.6 256 333.76353984 161.1572C345.0116384 140.70611136 366.50111936 128 389.84135808 128L634.15864192 128ZM640 192L384 192 320 320 128 320 128 832 896 832 896 320 704 320 640 192ZM512 384C618.038672 384 704 469.961328 704 576 704 682.0386688 618.038672 768 512 768 405.961328 768 320 682.0386688 320 576 320 469.961328 405.961328 384 512 384ZM512 448C441.307552 448 384 505.307552 384 576 384 646.692448 441.307552 704 512 704 582.692448 704 640 646.692448 640 576 640 505.307552 582.692448 448 512 448Z"/></svg>;
  },

});