import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { ClassName } from '../common';

const name = `${prefix}-icon-chart-pie`;

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
          d="M342.58665408 97.26586112L361.62627776 158.68615808C224.28399808 217.19395456 128 353.41579904 128 512.12597632 128 724.2033216 299.922656 896.1259776 512 896.1259776 673.1376768 896.1259776 811.0938368 796.8740928 868.0697408 656.169056L929.7502144 674.2884352C864.7740992 841.556512 702.2337408 960.1259776 512 960.1259776 264.576432 960.1259776 64 759.5495424 64 512.12597632 64 324.6527872 179.15322496 164.0750752 342.58665408 97.26586112ZM549.78808576 64C768.2971456 82.24302656 942.22848 259.0055168 958.7202496 478.00773696 958.8673024 479.36436096 958.918496 480.40880064 958.918496 481.46516224L958.918496 481.77253696C958.918496 499.44564928 944.5916096 513.77253696 926.918496 513.77253696L926.8030208 513.77232896 512.1577536 512.27601408 512.02662464 481.443376C512.00893184 481.00644288 512 480.56725248 512 480.12597632L512 96.12597632C512 78.496992 526.25543232 64.1975424 543.86768 64.12624448L544 64 549.78808576 64ZM575.98774272 133.4332608L576 448.18997632 890.883936 449.288976C864.3242368 287.93378432 737.1813376 160.47104128 575.98774272 133.4332608Z"
        />
      </svg>
    );
  },
});
