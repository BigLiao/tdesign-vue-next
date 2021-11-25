import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-arrow-up`;

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
          d="M493.82803072 66.96255488L498.68635776 69.72897664 498.68635776 69.72897664 503.1197344 73.4308064 846.1220672 416.22193024 800.867232 461.47676416 511.99662208 172.72243008 512 960.0080128 448 960.0080128 447.99662208 173.74643008 160.131456 461.47676416 114.87662208 416.22193024 457.87895616 73.4308064C460.65781632 70.65675392 463.81944384 68.499312 467.19367744 66.95845376L472.3689312 65.10488832C474.14105408 64.6418016 475.94514432 64.33298112 477.75990592 64.17843008L483.23852672 64.18644416C486.86771712 64.49527872 490.454272 65.42065792 493.82803072 66.96255488Z"
        />
      </svg>
    );
  },
});
