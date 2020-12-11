import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-layers`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M895.9505984 663.6669184L895.9505984 733.6189184 537.82679872 891.6303808C524.1157536 897.6776448 508.81176768 898.6855232 494.56974208 894.6540096L486.17320128 891.6303808 127.936 733.5549184 127.936 663.6669184 512 833.0729152 895.9505984 663.6669184ZM895.9505984 476.46691904L895.9505984 546.09891904 537.22007872 699.9489216C523.79969472 705.7030144 508.90238336 706.6620288 494.98969088 702.8259712L486.77992128 699.9489216 127.936 546.09891904 127.936 476.46691904 512 641.1276032 895.9505984 476.46691904ZM486.36980992 134.05721792C502.72046144 126.90534848 521.31469504 126.90534848 537.66534656 134.05721792L537.66534656 134.05721792 868.955232 278.96532736C891.623904 288.88073728 901.9624704 315.29535808 892.0470592 337.96403392 887.5334336 348.28311488 879.29856 356.52345792 868.9824832 361.04393472L868.9824832 361.04393472 537.68730496 506.21649984C521.31361024 513.3914048 502.68531456 513.39107968 486.31186944 506.21560448L486.31186944 506.21560448 155.04997632 361.04386368C132.38823488 351.1126144 122.06813248 324.69077568 131.99938176 302.02903424 136.52000128 291.7136032 144.76006784 283.4792928 155.078656 278.96588288L155.078656 278.96588288ZM512.01757824 192.69331584L220.928 320 512.00060864 447.59744448 803.072 320 512.01757824 192.69331584Z"/></svg>;
  },

});
