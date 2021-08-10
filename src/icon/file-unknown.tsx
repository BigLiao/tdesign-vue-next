import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-file-unknown`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M672 864L672 928 608 928 608 864 672 864ZM485.49033216 63.99809312C515.66607552 63.99809312 544.7432224 74.65494848 567.69150848 93.88237568L576.00000064 101.49033216 730.5096704 256C752.1138624 277.60419072 765.1976768 286.44017408 767.5984 311.1399264L768 320 768 512 768 512 768 448 704 448 704 512 703.936 511.99809344 703.936 383.99809344 448 384 448 128 192.00000064 128 192.00000064 832 448.00000064 831.9980928 448.00000064 896 192.00000064 896C172.3246336 896 133.6255072 882.9753856 128.55306944 841.360704L128.00000064 832 128.00000064 128C128.00000064 107.33121728 141.7721664 69.49139008 182.78880384 64.53794112L192.00000064 63.99809312 485.49033216 63.99809312ZM512.00000064 128L512 320 704 320 512.00000064 128ZM639.94934848 508.79357824C708.865664 509.87753152 766.9485568 561.30255552 767.9797248 634.25242048 768.6040192 678.4180288 754.8630464 703.8063232 719.3216192 739.6832704L709.2324096 749.6140608C678.1282944 779.7767424 673.8571904 796.2392832 672.3329472 824.6172736L672.1454336 831.9742656 607.84877568 832C607.84877568 786.0048 621.105152 756.4826112 657.4359424 719.794368L667.696832 709.6924928C700.3431552 678.0325312 704.8718784 664.9806464 704.4375232 634.25242048 703.8074304 589.67644416 675.8533504 572.3909248 640 572.3909248 606.19034496 572.3909248 587.7961696 581.55235008 578.58499584 612.97361536 577.55016384 616.503648 576.7590048 622.9195872 576.4281024 628.88934272L576.25864064 634.58695936 512 634.58695936C512 623.38724224 513.3298528 609.56690432 516.246704 599.6169056 531.89780352 546.22768704 583.376064 507.90376256 639.94934848 508.79357824Z"/></svg>;
  },

});
