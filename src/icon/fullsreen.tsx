import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import '../../common/style/web/components/icon/_index.less';

const name = `${prefix}-icon-fullsreen`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.50166308,7.79155516 L11.9971312,11.2862115 L11.988735,8.93602863 L12.988735,8.93602863 L13.0017453,12.4888155 L13.0026104,12.5052439 L13.0026102,12.5064207 L12.994426,12.5963691 C12.9784376,12.6838407 12.9397427,12.7631961 12.8846956,12.828266 L12.8846956,12.828266 L12.824955,12.8877384 L12.7555212,12.9371234 C12.7062945,12.9660943 12.6514309,12.9868292 12.5923581,12.9973412 L12.5923581,12.9973412 L12.5043092,13.0060257 L12.502611,13.0052433 L8.94261039,12.999652 L8.94261039,11.999652 L11.2999239,12.0032178 L7.7945563,8.49866194 L8.50166308,7.79155516 Z M2.55995831,2.05110244 L2.56694604,2.05238575 L6.12029491,2.0576398 L6.12029491,3.0576398 L3.77772707,3.05386317 L7.22268678,6.4984126 L6.51558,7.20551938 L3.06284211,3.75319177 L3.07213204,6.12110244 L2.07213204,6.12110244 L2.05996121,2.55109954 L2.06768872,2.46150293 C2.10912519,2.22890504 2.31231259,2.05193898 2.55995831,2.05110244 L2.55995831,2.05110244 Z"/></svg>;
  },

});
