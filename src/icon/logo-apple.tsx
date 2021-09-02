import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-logo-apple`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M627.98467328 128.07499712C625.68605824 154.2405632 611.48208 175.41912768 604.46826048 184.43907392 591.04539008 201.7104896 570.84092096 214.4333216 551.09344256 218.75397824 552.9462432 192.45763392 569.54197312 170.05722944 575.38226944 162.93916928 588.29475072 147.29313728 608.50915456 134.21035392 627.98467328 128.07499712ZM680.5100864 332.1434944C720.5203968 332.1434944 749.2077632 341.08123712 782.8971968 373.27380096 729.0815296 414.51744896 706.9422976 487.13536384 711.8326016 556.86495296 716.8768896 629.22504832 753.7627712 704.184512 815.2578752 737.5453632 802.9265664 763.9002432 796.9409792 774.259104 778.575648 802.1945344 746.5788224 851.2176064 710.4206464 901.1100416 664.8606208 901.5771008L664.065856 901.5771008C645.8023552 901.5771008 634.13542528 896.201504 617.98178496 888.7870144 597.14771072 879.206592 571.18118016 867.2721664 527.46029824 867.2721664L526.13527296 867.2721664C482.15733376 867.5349632 455.73505344 879.333632 434.50235456 888.82064 417.884272 896.2550592 405.8683872 901.6256768 387.40619648 901.6256768L386.27489536 901.6256768C339.41095808 901.2707072 298.77973312 848.313088 268.61708096 802.19952 173.18169856 656.4517824 173.33692672 497.9176992 221.91333888 422.78261888 258.19818112 366.89557056 314.97683776 332.20203328 370.07903232 332.20203328 398.73286912 332.20203328 421.98725696 340.5120416 446.6300032 349.31776064 470.95732672 358.00266624 496.10922112 366.9977024 525.54416448 366.9977024 553.47029312 366.9977024 575.95475008 358.47471232 597.69162944 350.2319616 621.13104896 341.33905664 645.4000064 332.1434944 680.5150528 332.1434944L680.5100864 332.1434944ZM680.5200192 64C632.58314624 67.25948608 576.65265472 97.89143232 543.89459136 137.62054656 514.18272128 173.83733632 489.65670592 227.46753024 499.27711296 279.58941696 500.54749824 279.63300992 501.78932224 279.64297408 503.04604736 279.64297408 554.06761024 279.64297408 606.3260288 248.91886016 636.99286144 209.45628416 666.3893056 171.68759488 688.6154688 118.4808736 680.5200192 64ZM698.249536 273.76543616C617.50244096 273.76543616 583.45908992 312.19050688 527.4019328 312.19050688 469.78380352 312.19050688 425.87788992 273.82895744 356.01041344 273.82895744 287.4294656 273.82895744 214.61762496 315.57703424 168.2777376 386.96563584 103.37258752 487.3545728 114.37390272 676.1706176 219.82210752 837.210656 257.42700864 894.7031616 307.85622144 959.4843584 373.657968 960L375.118352 960C432.55765888 960 449.43404096 922.5862784 528.23147072 922.1142336L529.52172544 922.1142336C607.31576192 922.1142336 622.79385088 959.93648 680.1213952 959.93648L681.257664 959.93648C747.1128064 959.250208 800.264096 887.5950656 837.8093888 830.0676864 864.9159168 788.8638976 874.9858624 768.0066752 896 721.3488128 743.576096 663.5698432 718.9817792 447.57688448 869.87824 364.628752 823.882336 307.05279936 759.2590848 273.76543616 698.2545024 273.76543616L698.249536 273.76543616 698.249536 273.76543616Z"/></svg>;
  },

});
