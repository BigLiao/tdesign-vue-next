import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-notification`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M640.0013632 768.0345152C624.85982976 841.0490048 558.9791232 896 480.00136256 896 401.02360192 896 335.14289536 841.0490048 320.00136256 768.0345152L387.64550528 768.093376C401.1207424 805.3307456 437.38286912 832 480.00136256 832 522.619856 832 558.88198272 805.3307456 572.35721984 768.093376L640.0013632 768.0345152ZM512 128L512.04527616 193.7627296C651.6076672 209.21285632 761.1035776 324.38827712 767.686528 466.4425152L768 479.97558592 768 704 800 704C817.6731136 704 832 718.3268864 832 736 832 753.6731136 817.6731136 768 800 768L160 768C142.32688832 768 128 753.6731136 128 736 128 718.3268864 142.32688832 704 160 704L192 703.936 192 704 256 704 256 703.936 704 704 704 479.97558592C704 356.28821632 603.71178368 256 480 256 356.28821632 256 256 356.28821632 256 480L256 703.936 192 703.936 192 479.97558592C192 331.75175936 304.0114432 209.6651936 448.01901056 193.75561984L448 128 512 128Z"/></svg>;
  },

});
