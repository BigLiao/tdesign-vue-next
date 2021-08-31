import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-play-circle`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM512 160C317.59576832 160 160 317.59576832 160 512 160 706.4042304 317.59576832 864 512 864 706.4042304 864 864 706.4042304 864 512 864 317.59576832 706.4042304 160 512 160ZM416.43537408 352.26370176C422.215456 352.15933248 427.91585472 353.62272192 432.93091136 356.4983872L653.4870528 482.96667904C661.0904704 487.32652608 666.2271104 494.33382016 668.4013184 502.16039872 673.3111808 514.7114464 669.7907904 529.10575424 659.6665984 537.9649184L654.928672 541.4013056 434.27388864 672.7415872C432.22059136 673.9637696 430.04623936 674.9466368 427.79341376 675.6784768L432.72717888 673.1114496C417.6608192 682.3496192 397.9581088 677.6249344 388.71994304 662.5585728 385.63357312 657.5250688 384 651.7357888 384 645.8313984L384 384.46390976C384 368.7544768 395.32001024 355.68897408 410.24795968 352.97947264 412.55315392 352.51070592 414.47201472 352.29915328 416.43537408 352.26370176ZM448.192 439.74648512L448.192 587.45848512 576.192 512.51448512 448.192 439.74648512Z"/></svg>;
  },

});
