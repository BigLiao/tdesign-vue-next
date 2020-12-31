import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-unfold-less`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M492.19150272 614.2794656C504.68814656 601.86423552 524.88321088 601.93023488 537.29844096 614.42687872L537.29844096 614.42687872 785.38672 864.142016 740.1318848 909.3968512 515.26010624 683.0885632 285.61162112 908.9071808 240.3567872 863.6523456 486.91957312 621.10598976C488.29419072 618.71736192 490.00231936 616.46840768 492.04384832 614.42687936L492.04384832 614.42687936C492.14224448 614.32848256 492.16685376 614.30395392 492.19150272 614.2794656ZM740.1318848 114.60314944L785.38672 159.85798336 537.29844096 409.57312128C524.88321088 422.06976512 504.68814656 422.13576448 492.19150272 409.7205344 492.16685376 409.69604608 492.14224448 409.67151744 492.11767552 409.64694848L492.04384832 409.57312064C489.94763584 407.47690816 488.20292288 405.1620096 486.8098304 402.70176704L240.3567872 160.34765632 285.61162112 115.0928224 515.32410624 340.88056256 740.1318848 114.60314944Z"/></svg>;
  },

});