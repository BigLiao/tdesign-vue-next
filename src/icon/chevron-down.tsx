import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-down`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M514.72285696 704.7972396800001L520.12398592 703.85630784C525.44129472 702.4731296 530.472656 699.70458368 534.64508928 695.5504467200001L534.64508928 695.5504467200001 910.3632832 320.41891840000005 865.108448 275.16408320000005 512.02827328 627.72684352 160.0351072 275.20768640000006 114.78027328 320.46252160000006 489.38601344 695.5130879999999C496.31708544 702.46731264 505.65104192 705.56179008 514.72285696 704.7972396800001Z"/></svg>;
  },

});