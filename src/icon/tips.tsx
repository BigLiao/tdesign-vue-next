import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-tips`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M640 896L640 960 384 960 384 896 640 896ZM512 128C688.7311168 128 832 271.26888 832 448 832 564.614 769.6226112 666.6589824 676.4136384 722.5891392 676.2889792 723.1067968 676.1087232 723.6738368 675.9204736 724.2385792L654.5871424 788.2385792C645.87584 814.3724736 621.41895616 832 593.87140992 832L430.12859008 832C402.58104384 832 378.12415808 814.3724736 369.41285888 788.2385792L348.07952576 724.2385792 347.58636352 722.5891392C254.3773888 666.6589824 192 564.614 192 448 192 271.26888 335.26888 128 512 128ZM512 192C370.615104 192 256 306.615104 256 448 256 554.12801344 320.57968064 645.1726336 412.5855488 683.9803712L426.66666688 768 597.33333312 768 611.37851008 683.9955264C703.4035008 645.1963456 768 554.14183232 768 448 768 306.615104 653.384896 192 512 192Z"/></svg>;
  },

});