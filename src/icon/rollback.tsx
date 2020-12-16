import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-rollback`;

export default Vue.extend({
  name,

  props: {
    // xs/small/medium/large/xl/18px/2em
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
      if (['xs', 'small', 'medium', 'large', 'xl'].includes(this.size)) return {};
      return {
        'font-size': this.size,
      };
    },
  },

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M295.52604544 171.48100416L340.78087936 216.73583808 236.67986752 320.7180928C243.05764992 320.24220864 249.50053632 320 255.99999424 320L639.99999424 320C781.3848896 320 895.9999936 434.615104 895.9999936 576 895.9999936 717.384896 781.3848896 832 639.99999424 832L319.95738944 832 319.99999744 768 639.99999424 768C746.0386688 768 831.9999936 682.0386688 831.9999936 576 831.9999936 473.74842368 752.0691136 390.16570368 651.2814528 384.32593216L639.99999424 384 255.99999424 384C249.84679552 384 243.76120256 384.28945216 237.75608768 384.85548224L341.22484352 488.36993664 295.9700096 533.62477056 159.88954368 397.52900416 159.76154368 397.75517376 137.13412672 375.1277568C124.63734912 362.63097984 124.63734912 342.36970048 137.13412672 329.87292288L137.13412672 329.87292288 295.52604544 171.48100416Z"/></svg>;
  },

});