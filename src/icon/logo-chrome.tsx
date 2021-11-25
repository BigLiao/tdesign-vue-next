import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-logo-chrome`;

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
      return [`${prefix}-icon`, name, CLASSNAMES.SIZE[this.size]];
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
    return (
      <svg
        onClick={this.handleClick}
        class={this.classes}
        style={this.iconStyle}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-opacity=".9"
          fill-rule="evenodd"
          d="M922.323936 343.73173056C925.3438976 343.73173056 928.0553984 345.5796864 929.1599744 348.39422016 949.6240256 400.51891136 960 455.57271552 960 512.030848 960 630.81121536 913.989664 742.7197696 830.4442752 827.141088 746.9664512 911.4918976 635.67737728 958.6779328 517.08222976 960 517.05579008 960 517.0264128 960 516.99997376 960L514.49139136 959.5585472C512.90611904 958.982496 511.53975936 957.8680448 510.6604064 956.3657856 509.32962624 954.085952 509.3208128 951.26848 510.63984256 948.9827776L510.63984256 948.9827776 690.856288 636.82221312C690.9591104 636.64299904 691.0678016 636.46966144 691.185312 636.29926208 716.675776 599.65156736 730.1480896 556.68145472 730.1480896 512.030848 730.1480896 453.0490368 706.8755904 397.75138432 664.6167104 356.3207456 662.4868736 354.23481792 661.8317632 351.06185728 662.95984 348.30020608 664.0849856 345.53855552 666.7729856 343.73173056 669.7576896 343.73173056L669.7576896 343.73173056ZM127.8833312 288.62504384C130.50670144 288.62504384 132.93324608 290.02055872 134.2434624 292.29745216L134.2434624 292.29745216 314.14851136 603.91743616C314.2513312 604.09958784 314.3482752 604.28173952 314.4364064 604.4697664 350.31459648 680.8441024 427.8611936 730.195392 512 730.195392 531.8030688 730.195392 551.45925248 727.5189376 570.4280128 722.2365504 573.31577728 721.4374336 576.37686528 722.4510208 578.20118016 724.8101696 580.02843264 727.1693248 580.24876096 730.4010496 578.7564064 732.9864192L578.7564064 732.9864192 452.60841984 951.5035136C451.28351488 953.7950976 448.84521984 955.1759232 446.25122624 955.1759232 445.88988864 955.1759232 445.5256128 955.1524224 445.1613376 955.0966016 340.12369856 939.3786944 243.71409856 886.334432 173.68508864 805.732416 102.95396736 724.3195392 64 620.01433536 64 512.030848 64 435.05717504 83.87944896 359.09708608 121.48500992 292.3620864 122.7776 290.06462784 125.20708224 288.63973376 127.84514112 288.62504384L127.84514112 288.62504384ZM512 344.58960512C604.31737728 344.58960512 679.4198016 419.7035712 679.4198016 512.030848 679.4198016 604.3551872 604.31737728 679.4662144 512 679.4662144 419.67674752 679.4662144 344.56844608 604.35812544 344.56844608 512.030848 344.56844608 419.7035712 419.67674752 344.58960512 512 344.58960512ZM512 64C591.14470848 64 668.9380736 84.92391232 736.9606272 124.51247168 802.9591104 162.919984 858.4582272 217.94147072 897.4562624 283.62763072 898.804672 285.89864832 898.8281728 288.71611968 897.5238272 291.01064 896.219488 293.30809856 893.7811904 294.7241792 891.1401984 294.7241792L891.1401984 294.7241792 531.59155392 294.7241792C531.38297728 294.7241792 531.1714624 294.71536512 530.96288512 294.6948 524.5528128 294.1483456 518.175056 293.86630464 512 293.86630464 412.48524608 293.86630464 325.61437376 361.16538624 300.74670144 457.52643648 300.0005248 460.41441792 297.5827936 462.56498048 294.6274624 462.96747648 294.29550144 463.01154496 293.96060352 463.03504832 293.63158016 463.03504832 291.03464896 463.03504832 288.59635392 461.65422336 287.2743872 459.36264064L287.2743872 459.36264064 161.15871488 240.91311808C159.64579648 238.29542528 159.89256384 235.01963776 161.78150848 232.65754496 247.38035392 125.47317312 375.02950848 64 512 64Z"
        />
      </svg>
    );
  },
});
