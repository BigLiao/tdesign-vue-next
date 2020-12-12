import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-help-circle-filled`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM544 736L480 736 480 800 544 800 544 736ZM512.2952448 256.64610496C441.57726976 255.489344 377.22819968 301.1206464 357.66394688 370.52669568 354.01781184 383.46170624 352.35546368 401.42816192 352.35546368 415.98780736L352.35546368 415.98780736 416.35546368 415.98780736 416.56729536 408.5808992C416.9809312 400.82021056 417.96989888 392.47948096 419.26346432 387.8904352 430.77765376 347.04275136 468.98897024 319.94628928 511.248512 320.63754496 564.72860672 321.51233984 607.554592 358.4738848 608.34222656 416.42270848 608.88517824 456.36943488 596.93322496 476.61043904 556.124528 517.76842944L556.124528 517.76842944 543.2981664 530.90088384C497.88380224 578.59564288 480 612.83118528 480 672.6246144L480 672.6246144 544 672.6246144 544.23439808 663.0609024C546.13973632 626.16948096 560.01985152 604.73470528 598.90074624 565.52317824L598.90074624 565.52317824 611.51250368 552.613136C655.9401472 505.9730656 673.1166976 472.96825088 672.3363136 415.55290688 671.047328 320.71799424 598.442304 258.05524608 512.2952448 256.64610496Z"/></svg>;
  },

});
