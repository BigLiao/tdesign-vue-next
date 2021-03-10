import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-add`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M768 640L767.936 767.9980928 896 768 896 832 767.936 831.9980928 768 960 704 960 703.936 831.9980928 576 832 576 768 703.936 767.9980928 704 640 768 640ZM485.49033216 63.99809312C515.66607552 63.99809312 544.7432224 74.65494848 567.69150848 93.88237568L576.00000064 101.49033216 730.5096704 256C752.1138624 277.60419072 765.1976768 286.44017408 767.5984 311.1399264L768 320 768 512 767.936 511.99809344 768 576 704 576 703.936 383.99809344 448 384 448 128 192.00000064 128 192.00000064 832 512 832 512 896 192.00000064 896C172.3246336 896 133.6255072 882.9753856 128.55306944 841.360704L128.00000064 832 128.00000064 128C128.00000064 107.33121728 141.7721664 69.49139008 182.78880384 64.53794112L192.00000064 63.99809312 485.49033216 63.99809312ZM512.00000064 128L512 320 704 320 512.00000064 128Z"/></svg>;
  },

});