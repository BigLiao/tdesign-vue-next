import Vue, { VNode, PropType } from 'vue';
import { prefix } from '../config';
import Radio from './radio';

const name = `${prefix}-radio-group`;

const sizeList: Array<string> = ['large', 'small'];

interface OptionType {  value: string; label: VNode; disabled?: boolean }

export default Vue.extend({
  name,

  components: {
    Radio,
  },

  provide(): any {
    return {
      radioGroup: this,
    };
  },

  props: {
    value: { default: undefined },
    defaultValue: { default: undefined },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: 'small', validator(v: string) {
      return sizeList.indexOf(v) > -1;
    } },
    options: { type: Array as PropType<Array<OptionType>>, default: (): Array<OptionType>  => [] },
    name: String,
  },

  data() {
    return {};
  },

  render(): VNode {
    const { $slots } = this;
    let children: VNode[] | VNode | string = $slots.default;

    if (this.options && this.options.length) {
      children = this.options.map((option: OptionType) => (
        <Radio
          key={`radio-group-options-${option.value}`}
          name={this.name}
          checked={this.value === option.value}
          disabled={'disabled' in option ? option.disabled : this.disabled}
          value={option.value}
        >
          {option.label}
        </Radio>
      ) as VNode);
    }

    return (
      <div class={name}>
        {children}
      </div>
    ) as VNode;
  },

  methods: {
    handleRadioChange(e: Event) {
      const { target } = e;
      this.$emit('input', (target as HTMLInputElement).value);
      this.$emit('change', e);
    },
  },
});
