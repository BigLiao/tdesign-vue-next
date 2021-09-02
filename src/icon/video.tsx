import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-video`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M832 128C867.3462208 128 896 156.653776 896 192L896 832C896 867.3462208 867.3462208 896 832 896L192 896C156.653776 896 128 867.3462208 128 832L128 192C128 156.653776 156.653776 128 192 128L832 128ZM832 192L192 192 192 832 832 832 832 192ZM390.51880448 331.8586624C401.20959808 317.78578688 421.2845184 315.04406784 435.35739392 325.7348608L435.35739392 325.7348608 651.7948928 490.156736C654.2330432 492.00893504 656.3927424 494.20147712 658.207936 496.66730432 668.68512 510.89992256 665.6407424 530.93117824 651.408128 541.40836608L651.408128 541.40836608 434.9706272 700.7364928C429.47337472 704.783232 422.82611904 706.9660544 416 706.9660544 398.32688832 706.9660544 384 692.639168 384 674.9660544L384 674.9660544 384 351.21605632C384 344.22472832 386.28962112 337.42576832 390.51880448 331.8586624ZM447.97006272 415.66993088L447.97006272 611.63793088 578.97806272 515.25393088 447.97006272 415.66993088Z"/></svg>;
  },

});
