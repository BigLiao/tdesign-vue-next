import Vue, { VueConstructor, CreateElement, VNode } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import { omit } from '../utils/helper';
import Icon from '../icon';
import ClearIcon from '../icon/clear-circle-filled';

const name = `${prefix}-input`;

function getValidAttrs(obj: object): object {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

interface InputInstance extends Vue {
  composing: boolean;
}

export default (Vue as VueConstructor<InputInstance>).extend({
  name,
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    defaultValue: [String, Number],
    prefixIcon: [String, Function],
    suffixIcon: [String, Function],
    size: {
      type: String,
      default: 'medium',
      validator(v: string): boolean {
        return ['large', 'medium', 'small'].indexOf(v) > -1;
      },
    },
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean,
    autocomplete: Boolean,
    status: {
      type: String,
      validator(v: string): boolean {
        return ['default', 'success', 'warning', 'error'].indexOf(v) > -1;
      },
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    showClear(): boolean {
      return this.value && !this.disabled && this.clearable;
    },
  },
  created() {
    this.composing = false;
  },
  render(h: CreateElement): VNode {
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
      focus: this.onFocus,
      blur: this.onBlur,
      keydown: this.onKeyDown,
      keyup: this.$listeners.keyup,
      keypresss: this.$listeners.keypresss,
    });

    const wrapperAttrs = omit(this.$attrs, Object.keys(inputAttrs));
    const wrapperEvents = omit(this.$listeners, [...Object.keys(inputEvents), 'input']);

    const prefixIcon = this.renderIcon(h, this.prefixIcon, 'prefix-icon');
    let suffixIcon = this.renderIcon(h, this.suffixIcon, 'suffix-icon');

    if (this.showClear) {
      suffixIcon = <ClearIcon class={`${name}__suffix-clear`} nativeOnClick={this.onClear} />;
    }

    const classes = [
      name,
      CLASSNAMES.SIZE[this.size] || '',
      CLASSNAMES.STATUS[this.status] || '',
      {
        [CLASSNAMES.STATUS.disabled]: this.disabled,
        [CLASSNAMES.STATUS.focused]: this.focused,
        [`${name}--prefix`]: prefixIcon,
        [`${name}--suffix`]: suffixIcon,
      },
    ];
    return (
      <div class={classes} {...{ attrs: wrapperAttrs, on: wrapperEvents }}>
        {prefixIcon ? <span class={`${name}__prefix`}>{prefixIcon}</span> : null}
        <input
          {...{ attrs: inputAttrs, on: inputEvents }}
          ref="refInputElem"
          value={this.value}
          class={`${name}__inner`}
          onInput={this.onInput}
        />
        {suffixIcon ? <span class={`${name}__suffix`}>{suffixIcon}</span> : null}
      </div>
    );
  },
  methods: {
    renderIcon(
      h: CreateElement,
      icon: string | Function | undefined,
      iconType: 'prefix-icon' | 'suffix-icon',
    ): JsxNode {
      if (typeof icon === 'string') {
        return <Icon name={icon}></Icon>;
      }
      if (typeof icon === 'function') {
        return icon(h);
      }
      if (this.$scopedSlots[iconType]) {
        return this.$scopedSlots[iconType](null);
      }
      return null;
    },
    setInputValue(v: string | number = ''): void {
      const input = this.$refs.refInputElem as HTMLInputElement;
      const sV = String(v);
      if (!input) {
        return;
      }
      if (input.value !== sV) {
        input.value = sV;
      }
    },
    focus(): void {
      const input = this.$refs.refInputElem as HTMLInputElement;
      input?.focus();
    },
    blur(): void {
      const input = this.$refs.refInputElem as HTMLInputElement;
      input?.blur();
    },
    onInput(e: Event): void {
      if (this.composing) return;
      /**
       * input 回调
       *
       * @param {String} value 输入值
       */
      const { target } = e;
      this.$emit('input', (target as HTMLInputElement).value);
      // 受控
      this.$nextTick(() => this.setInputValue(this.value));
    },
    onKeyDown(e: KeyboardEvent) {
      if (this.disabled) return;

      const { keyCode } = e;
      if (keyCode === 13) {
        this.$emit('keydown-enter', e);
      }
      this.$emit('keydown', e);
    },
    onClear() {
      this.$emit('clear');
      this.$emit('input', '');
    },
    onFocus(e: Event) {
      if (this.disabled) return;

      this.focused = true;
      this.$emit('focus', e);
    },
    onBlur(e: Event) {
      this.focused = false;
      this.$emit('blur', e);
    },
  },
});
