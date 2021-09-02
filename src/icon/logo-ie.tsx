import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-logo-ie`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M740.2401792 610.50097344L957.6549952 610.50097344C959.329472 596.02294592 960 581.22829376 960 566.10463552 960 495.15433792 940.1641792 428.60670528 905.5435968 371.29777024 941.3523392 279.92964992 940.0757568 202.38331456 892.136736 156.03770496 846.5500864 112.45503744 724.2377856 119.53043264 585.96914496 178.32520064 575.74176 177.58228416 565.41490176 177.20021312 554.99041152 177.20021312 365.20905856 177.20021312 205.97907008 302.60629248 161.96926336 471.58088896 221.5025152 398.39122816 284.13419328 345.32576192 367.80274688 306.68172032 360.19484032 313.52716544 315.80555968 355.90170944 308.33949504 363.07616064 87.70098816 574.87458816 18.122719872 851.5473152 92.98783808 923.4492544 149.8960864 978.0836928 253.02835456 968.857376 371.4924896 913.1474816 426.57705024 940.08528 488.92688576 955.2726144 554.98488512 955.2726144 732.868064 955.2726144 883.6169856 845.3245056 938.2244416 692.2005632L719.1369856 692.2005632C688.9890432 745.602112 630.028688 781.9501888 562.36068672 781.9501888 494.6926848 781.9501888 435.72864384 745.602112 405.58254336 692.2005632 392.1812064 668.0770048 384.4775104 640.415744 384.4775104 611.13775936L384.4775104 610.50097344 740.2401792 610.50097344ZM384.80356352 507.886512C389.82883456 422.0000544 464.1984256 353.48015552 554.98488512 353.48015552 645.7676608 353.48015552 720.1390912 421.99828544 725.1625216 507.886512L384.80356352 507.886512ZM890.1527872 199.22591936C921.0320448 229.19021952 920.2601984 284.3199328 893.8480512 353.13522944 848.5929792 286.88476352 782.8444544 234.67895744 705.2235456 204.87031616 788.217888 170.69792448 855.7311488 166.17144 890.1527872 199.22591936ZM150.10240256 909.8132032C110.69786624 871.9651392 122.57577984 792.5243712 173.3387552 696.8154944 204.9382784 781.9608 266.5089024 853.4382144 345.885344 899.4848896 257.99099392 937.7981568 186.04930112 944.3022144 150.10240256 909.8132032Z"/></svg>;
  },

});
