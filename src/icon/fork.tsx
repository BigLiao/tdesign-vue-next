import Vue from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';

const name = `${prefix}-icon-fork`;

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
    return <svg class={this.classes} style={this.iconStyle}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-opacity=".9" fill-rule="evenodd" d="M704 128C774.692448 128 832 185.307552 832 256 832 316.26658304 790.3496192 366.80519936 734.263296 380.40141824 707.2580224 492.7905184 606.03628224 576.38662528 485.28962496 576.38662528L353.856 576.384 353.92115584 644.5430912C408.15101568 659.4094272 448 709.0510976 448 768 448 838.692448 390.692448 896 320 896 249.307552 896 192 838.692448 192 768 192 707.6871808 233.71430912 657.1172608 289.86581504 643.5673536L289.856 576.384 229.28962496 576.38662528C224.72250816 576.38662528 220.18332416 576.26702848 215.67503488 576.03079552L289.856 576 289.86581504 380.43264448C233.71430912 366.88273664 192 316.31281792 192 256 192 185.307552 249.307552 128 320 128 390.692448 128 448 185.307552 448 256 448 314.94890176 408.15101568 364.59057536 353.92115584 379.45691072L353.856 512.32 485.28962496 512.38662528C570.94010368 512.38662528 643.4916096 456.30324992 668.2244032 378.8562336 614.88599616 363.38222528 576 314.23226816 576 256 576 185.307552 633.307552 128 704 128ZM320 704C284.653776 704 256 732.6537792 256 768 256 803.3462208 284.653776 832 320 832 355.346224 832 384 803.3462208 384 768 384 732.6537792 355.346224 704 320 704ZM320 192C284.653776 192 256 220.653776 256 256 256 291.346224 284.653776 320 320 320 355.346224 320 384 291.346224 384 256 384 220.653776 355.346224 192 320 192ZM704 192C668.6537792 192 640 220.653776 640 256 640 291.346224 668.6537792 320 704 320 739.3462208 320 768 291.346224 768 256 768 220.653776 739.3462208 192 704 192Z"/></svg>;
  },

});
