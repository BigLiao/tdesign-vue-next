import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-check`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
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
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M402.9169184 763.46881088L407.35241728 759.72593536 407.35241728 759.72593536C409.12022784 757.9518048 410.63754048 756.02214208 411.90433344 753.98102464L873.9229504 292.3899263999999 828.6681152 247.13509119999992 384.0738432 691.1020115199999 161.04067712 467.62941951999994 115.7858432 512.8842540799999 362.1198656 759.70367488C373.1973664 770.84261696 390.437104 772.0960345599999 402.9169184 763.46881088Z"/></svg>;
  },

});
