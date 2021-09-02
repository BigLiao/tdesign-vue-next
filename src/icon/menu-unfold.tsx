import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-menu-unfold`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M896 768L896 832 128 832 128 768 896 768ZM857.6 317.03657216C878.8077312 317.03657216 896 334.22883776 896 355.43657216L896 355.43657216 896 605.0530112C896 612.76932672 893.6753088 620.3066592 889.32896 626.68245824 877.3833472 644.2058816 853.4939776 648.727584 835.9705536 636.78197312L835.9705536 636.78197312 660.6425664 517.26191424C656.0126784 514.10574592 652.015968 510.10903488 648.8597952 505.47914624 634.923248 485.03515392 640.1985728 457.16421888 660.6425664 443.22766912L660.6425664 443.22766912 835.9705536 323.70761024C842.3463488 319.36126592 849.8836864 317.03657216 857.6 317.03657216ZM831.936 403.904L719.936 480.192 831.936 556.544 831.936 403.904ZM576 448L576 512 128 512 128 448 576 448ZM896 128L896 192 128 192 128 128 896 128Z"/></svg>;
  },

});
