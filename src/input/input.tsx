import Vue, { VueConstructor, CreateElement, VNode } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { omit } from '../utils/helper';
import Icon from '../icon';

const name = `${prefix}-input`;

function getValidAttrs(obj: object): object {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

interface InputInstance extends Vue {
  composing: boolean
}

export default (Vue as VueConstructor<InputInstance>).extend({
  name,
  inheritAttrs: false,
  props: {
    value: { type: [String, Number], default: '' },
    defaultValue: [String, Number],
    prefixIcon: [String, Function],
    suffixIcon: [String, Function],
    size: { type: String, default: 'default', validator(v: string) { return ['large', 'default', 'small'].indexOf(v) > -1; } },
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean, // TODO
    autocomplete: Boolean,
    status: { type: String, validator(v: string) { return ['default', 'success', 'warning', 'error'].indexOf(v) > -1; } },
  },
  data() {
    return {
      focused: false,
    };
  },
  created() {
    this.composing = false;
  },
  render(h: CreateElement) {
    const inputAttrs = getValidAttrs({
      disabled: this.disabled,
      readonly: this.readonly,
      autocomplete: this.autocomplete,
      placeholder: this.$attrs.placeholder,
      maxlength: this.$attrs.maxlength,
      name: this.$attrs.name,
      type: this.$attrs.type || 'text',
    });

    const inputEvents = getValidAttrs({
      change: this.$listeners.change,
      focus: this.$listeners.focus,
      blur: this.$listeners.blur,
      keydown: this.$listeners.keydown,
      keyup: this.$listeners.keyup,
      keypresss: this.$listeners.keypresss,
    });

    const wrapperAttrs = omit(this.$attrs, Object.keys(inputAttrs));
    const wrapperEvents = omit(this.$listeners, [...Object.keys(inputEvents), 'input']);

    const prefixIcon = this.renderIcon(h, this.prefixIcon);
    const suffixIcon = this.renderIcon(h, this.suffixIcon);

    const classes = [
      name,
      CLASSNAMES.SIZE[this.size] || '',
      CLASSNAMES.STATUS[this.status] || '',
      {
        [CLASSNAMES.STATUS.disabled]: this.disabled,
        [CLASSNAMES.STATUS.focused]: this.focused,
        [`${name}--prefix`]: prefixIcon,
        [`${name}--suffix`]: suffixIcon,
      }
    ];
    return (
      <div class={classes} {...{ attrs: wrapperAttrs, on: wrapperEvents }}>
        {
          this.prefixIcon ?
          <span class={`${name}__prefix`}>
            { prefixIcon }
          </span> : null
        }
        <input 
          {...{ attrs: inputAttrs, on: inputEvents }}
          ref="refInputElem"
          value={this.value} 
          class={name + '__inner'}
          onInput={this.onInput}
        />
        {
          this.suffixIcon ?
          <span class={`${name}__suffix`}>
            { suffixIcon }
          </span> : null
        }
      </div>
    );
  },
  methods: {
    renderIcon(h: CreateElement, icon: string | Function | undefined): VNode {
      if (typeof icon === 'string') {
        return <Icon name={icon}></Icon>
      } else if (typeof icon === 'function') {
        return icon();
      }
      return null;
    },
    setInputValue(v: string | number = '') {
      const input = this.$refs.refInputElem as HTMLInputElement;
      const sV = String(v);
      if (!input) {
        return;
      }
      if (input.value !== sV) {
        input.value = sV;
      }
    },
    focus() {
      const input = this.$refs.refInputElem as HTMLInputElement;
      input && input.focus();
    },
    blur() {
      const input = this.$refs.refInputElem as HTMLInputElement;
      input && input.blur();
    },
    onInput(e: Event) {
      if (this.composing) return;
      /**
       * input 回调
       *
       * @param {String} value 输入值
       */
      const target = e.target;
      this.$emit('input', (target as HTMLInputElement).value);
      // 受控
      this.$nextTick(() => this.setInputValue(this.value));
    },
  }
});
