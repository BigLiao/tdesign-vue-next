import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-chevron-left-double`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

  emits: ['click'],

  computed: {
    classes(): ClassName {
      return [
        `${prefix}-icon`,
        name,
        CLASSNAMES.SIZE[this.size],
      ];
    },
    iconStyle(): Record<string, any> {
      if (['small', 'medium', 'large'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  methods: {
    handleClick(e: MouseEvent) {
      this.$emit('click', { e });
    },
  },

  render() {
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M480.85653056 147.2L526.11136448 192.45483392 205.248 512.128 525.2099968 831.642336 479.95516288 876.8971648 137.4061312 534.88949632 133.68235328 530.44833152C127.16830272 521.07071936 126.25518656 508.98022144 130.94132928 498.8354752L130.94132928 498.8354752C132.68176704 495.17687488 134.8434144 492.02552064 137.62046784 489.25799872L137.62046784 489.25799872 480.85653056 147.2ZM800.8565312 147.2L846.1113664 192.45483392 525.248 512.128 845.2099968 831.642336 799.9551616 876.8971648 457.4061312 534.88949632 453.68235328 530.44833152C447.16830272 521.07071936 446.25518656 508.98022144 450.94132928 498.8354752L450.94132928 498.8354752C452.68176704 495.17687488 454.8434144 492.02552064 457.62046784 489.25799872L457.62046784 489.25799872 800.8565312 147.2Z"/></svg>;
  },

});
