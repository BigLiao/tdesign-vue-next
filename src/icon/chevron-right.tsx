import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-right`;

export default Vue.extend({
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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M758.8081664000001 489.6127065600001C771.27697472 502.10946816 771.2543136 522.34806144 758.757552 534.8168691200001L758.757552 534.8168691200001 383.6690304000001 909.0663616 338.4141952 863.8115328 690.7689683200001 512.20006272 338.4141952 160.8056710400001 383.6690304 115.5508371200001 758.41696832 489.22406272 758.757552 489.56206336Z"/></svg>;
  },

});
