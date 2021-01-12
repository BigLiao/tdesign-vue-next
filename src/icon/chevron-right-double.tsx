import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-chevron-right-double`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M519.4634694399999 147.2L474.2086355199999 192.45483392 795.0719999999999 512.128 475.11000319999994 831.642336 520.36483712 876.8971648 862.9138687999999 534.88949632 866.6376467199999 530.44833152C873.15169728 521.07071936 874.06481344 508.98022144 869.37867072 498.8354752L869.37867072 498.8354752C867.63823296 495.17687488 865.4765855999999 492.02552064 862.69953216 489.25799872L862.69953216 489.25799872 519.4634694399999 147.2ZM199.4634688 147.2L154.20863359999998 192.45483392 475.0719999999999 512.128 155.11000319999994 831.642336 200.36483839999994 876.8971648 542.9138687999999 534.88949632 546.63764672 530.44833152C553.15169728 521.07071936 554.06481344 508.98022144 549.37867072 498.8354752L549.37867072 498.8354752C547.6382329599999 495.17687488 545.4765855999999 492.02552064 542.69953216 489.25799872L542.69953216 489.25799872 199.4634688 147.2Z"/></svg>;
  },

});
