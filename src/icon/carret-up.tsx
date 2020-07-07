import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-carret-up`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.49588462,2.01274529 C4.10928529,2.01274529 3.79588462,2.32614597 3.79588462,2.71274529 L3.79588462,13.2958533 C3.79588462,13.4519583 3.8480647,13.6035839 3.94413069,13.7266289 C4.18204147,14.0313542 4.62193492,14.0855181 4.9266602,13.8476073 L11.4026036,8.79158842 C11.4671094,8.74122626 11.5251891,8.68313618 11.5755397,8.6186214 C11.9153345,8.18323887 11.8378453,7.55483349 11.4024628,7.21503871 L4.92656164,2.16091443 C4.80353324,2.06489678 4.65194671,2.01274529 4.49588462,2.01274529 Z M4.79578794,12.6803731 L4.79578794,3.32737309 L10.7872099,8.00336852 L4.79578794,12.6803731 Z" transform="rotate(-90 7.792 8.004)"/></svg>;
  },

});
