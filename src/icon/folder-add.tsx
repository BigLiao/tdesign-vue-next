import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-folder-add`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M831.9999936 640L831.9999936 767.9793728 959.9999936 768 959.9999936 832 831.9999936 831.9793728 831.9999936 960 767.9999936 960 767.9999936 831.9793728 639.99999232 832 639.99999232 768 767.9999936 767.9793728 767.9999936 640 831.9999936 640ZM385.35633792 191.97937152C396.94290752 192.18829376 406.9288608 193.51345472 417.49065024 200.23027968L423.91423552 204.9415776 538.5096608 298.65900032 767.9999936 298.65900032C811.2268992 298.65900032 829.5146944 333.694512 831.7609408 349.02868864L831.9999936 351.9930848 831.9999936 575.97937152 767.9999936 575.97937152 767.9999936 358.4 512.26743232 358.4 383.70409408 256 191.99999232 256 191.99999232 768 511.93599232 767.9793728 511.93599232 767.9793728 575.99999232 768 575.99999232 832 447.99999232 832 447.99999232 831.9153728 191.99999232 831.999072C173.53577536 831.999072 133.7869856 821.4809408 128.56921024 786.5334848L127.99999232 778.66576 127.99999232 245.32491584C127.99999232 230.06062144 140.24771712 196.8297632 182.48390784 192.46682304L191.99999232 191.99083136 385.35633792 191.97937152Z"/></svg>;
  },

});
