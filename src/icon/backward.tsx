import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-backward`;

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
    return <svg onClick={this.handleClick} class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M172.8 193.26120448C183.84725888 193.26120448 194.50498816 197.34296 202.72601536 204.72243392L202.72601536 204.72243392 492.05227008 464.43153344C502.16902528 473.51267712 508.71761664 485.086832 511.60285952 497.38949376L511.61328128 238.26225984C511.61328128 213.51990272 531.67092416 193.46225984 556.41328128 193.46225984 567.54063232 193.46225984 578.26976448 197.6032864 586.51174528 205.0790944L586.51174528 205.0790944 873.4455936 465.33961856C899.6263872 489.08665088 901.5993408 529.56115136 877.8523072 555.74194624 877.1417088 556.50025216 876.6679744 557.00579008 876.2678976 557.42177024L876.2678976 557.42177024 586.51174528 820.409184C568.18518912 837.0321088 539.85303808 835.65104 523.23011584 817.3244864 515.75430848 809.0825024 511.61328128 798.3533696 511.61328128 787.2260224L511.61328128 787.2260224 511.61243264 526.714432C509.24082112 536.8381632 504.3633056 546.52616448 496.92763392 554.8097984 496.16234304 555.63281472 495.65214912 556.18149248 495.2207808 556.63253312L495.2207808 556.63253312 202.80724928 820.5984512C184.43512576 837.1709952 156.1068736 835.7121472 139.53432704 817.3400256 132.10958528 809.1090496 128 798.4177152 128 787.3327744L128 787.3327744 128 238.06120448C128 213.31884736 148.05764352 193.26120448 172.8 193.26120448ZM192 281.088L192 744.128 449.3008192 512.05834752 192 281.088ZM575.552 281.536L575.552 743.872 830.4477888 512.7441408 575.552 281.536Z"/></svg>;
  },

});
