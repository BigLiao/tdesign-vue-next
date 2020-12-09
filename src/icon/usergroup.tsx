import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-usergroup`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M640 576C729.9225728 576 814.4307968 599.18159296 887.8745728 639.8946848L888.64 640 925.2160704 658.3197248C946.5708096 669.2764608 960 691.2604224 960 715.261984L960 832C960 867.3462208 931.3462208 896 896 896L384 896C348.653776 896 320 867.3462208 320 832L320 715.2818624C320 691.2790592 333.43055936 669.2941888 354.7869856 658.3380288L391.744 640 392.064 639.936 401.52287808 634.81298816C472.74231744 597.2582336 553.8885952 576 640 576ZM640 640C544.8213984 640 456.5751328 669.6808576 384.01207488 720.2916928L384 832 896 832 896.0210368 720.3147904C823.4517184 669.689888 735.1930816 640 640 640ZM384 512L384.06414528 576.00000448 384 576C288.8213984 576 200.5751328 605.68085504 128.01207488 656.2916928L128 768 256 768 256 832 128 832C92.653776 832 64 803.3462208 64 768L64 651.2818624C64 627.2790624 77.43055936 605.29418816 98.7869856 594.33803008L135.744 576 136.064 575.936 145.52287808 570.81298816C216.74231744 533.2582336 297.8885952 512 384 512L384 512ZM640 160.48646208C746.0386688 160.48646208 832 246.44779008 832 352.48646208 832 458.52513408 746.0386688 544.48646208 640 544.48646208 533.961328 544.48646208 448 458.52513408 448 352.48646208 448 246.44779008 533.961328 160.48646208 640 160.48646208ZM384.41335936 96.48646208C418.68390592 96.48646208 450.85734976 105.46522752 478.70961152 121.19867968 461.28225408 135.34941824 445.77604928 151.7236832 432.6001472 169.89752256 417.77703424 163.82873856 401.48551168 160.48646208 384.41335936 160.48646208 313.72091136 160.48646208 256.41335936 217.79401408 256.41335936 288.48646208 256.41335936 355.96561728 308.62953792 411.24902976 374.8605696 416.13537536L384.41335936 416.48646208 384.4778176 480.48645184C384.45633216 480.48645888 384.43484608 480.48646208 384.41335936 480.48646208 278.37468736 480.48646208 192.41335936 394.52513408 192.41335936 288.48646208 192.41335936 182.44779008 278.37468736 96.48646208 384.41335936 96.48646208ZM640 224.48646208C569.307552 224.48646208 512 281.79401408 512 352.48646208 512 423.17891008 569.307552 480.48646208 640 480.48646208 710.692448 480.48646208 768 423.17891008 768 352.48646208 768 281.79401408 710.692448 224.48646208 640 224.48646208Z"/></svg>;
  },

});
