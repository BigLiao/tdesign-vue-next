import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-file-pdf`;

export default defineComponent({
  name,

  props: {
    // small/medium/large/xl/18px/2em
    size: {
      type: String,
      default: undefined,
    },
  },

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

  render() {
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M485.49033216 63.99809312C515.66607552 63.99809312 544.7432224 74.65494848 567.69150848 93.88237568L576.00000064 101.49033216 730.5096704 256C752.1138624 277.60419072 765.1976768 286.44017408 767.5984 311.1399264L768 320 768 512 768 512 768 448 704 448 703.936 383.99809344 448 384 448 128 192.00000064 128 192.00000064 832 384 832 384 896 192.00000064 896C172.3246336 896 133.6255072 882.9753856 128.55306944 841.360704L128.00000064 832 128.00000064 128C128.00000064 107.33121728 141.7721664 69.49139008 182.78880384 64.53794112L192.00000064 63.99809312 485.49033216 63.99809312ZM581.16284736 495.42316288C605.97513536 529.36328256 624.3330208 577.99522496 632.16401792 632.51490112L702.390048 611.03026368C729.9006848 603.02972672 739.9560896 601.56012352 756.9687424 600.9833536 799.82464 599.5304352 828.2004544 622.76266816 831.5766144 668.2921088 835.6918464 723.788384 792.4663808 745.8972352 729.5676096 743.6992192 700.058816 742.6680256 665.8546688 736.5910592 632.03108032 727.7919232 612.4997568 818.2408 529.45990464 921.0707968 473.02315904 888.1417088L467.28346752 884.2449024 462.06161664 878.7966976C425.42652096 833.042816 466.3964704 728.9588224 534.82649024 674.17712 471.40539136 611.10747392 423.99432832 513.72331072 466.0862624 468.91104 500.43458368 432.34283968 547.30218816 449.10599808 581.16284736 495.42316288ZM575.744 715.328L572.37937728 717.7874176C533.92224512 747.7056448 505.91980928 801.6828672 502.97463296 827.7479488L502.74642688 833.2438272 503.04 835.2C509.06419712 831.1312896 515.6510304 825.168608 522.40480064 817.6854784L529.19956096 809.7093696 536.01087104 800.8075328C550.17404032 781.3183104 561.77537472 759.3486272 569.28830592 738.2087232L573.29324288 725.6508352 575.744 715.328ZM763.2805056 658.471424L755.6080128 658.6996928C744.4444352 659.3447232 734.440032 661.5121088 706.8654848 669.8058624L676.864 678.976 686.7619136 680.9395328C693.8682112 682.2139968 700.8321984 683.2881408 707.5670656 684.129888L717.4866688 685.2141888 731.5792256 686.1343552C764.9818304 687.3016192 774.8536704 682.2523968 774.1343232 672.5516416 773.2588288 660.7450688 772.260416 658.5414144 763.2805056 658.471424ZM508.06998784 508.34613568C497.86359936 519.2121472 525.02960064 573.53481344 560.65811968 616.39742656L567.4305792 624.28646144 573.568 630.912 571.13203264 617.9912768C565.64952576 592.39138304 557.45766784 569.20349696 547.46354944 550.16326848L541.258064 539.250736 534.66357632 529.41695296C519.04882688 508.05792128 511.03351488 505.19108032 508.06998784 508.34613568ZM512.00000064 128L512 320 704 320 512.00000064 128Z"/></svg>;
  },

});
