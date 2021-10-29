import { prefix } from '../config';
import { defineComponent } from 'vue';
import props from './props';
import CLASSNAMES from '../utils/classnames';
import calcTextareaHeight from './calcTextareaHeight';

const name = `${prefix}-textarea`;

type TextareaEmitEvent = 'input' | 'keydown' | 'keyup' | 'keypress' | 'focus' | 'blur' | 'change';

function getValidAttrs(obj: object): object {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

export default defineComponent({
  name,
  props: {...props},
  inheritAttrs: false,
  emits: ['input', 'keydown', 'keyup', 'keypress', 'focus', 'blur', 'change', 'update:value'],
  data() {
    return {
      focused: false,
      mouseHover: false,
      textareaStyle: {},
    };
  },
  computed: {
    inputAttrs(): Record<string, any> {
      return getValidAttrs({
        autofocus: this.autofocus,
        disabled: this.disabled,
        readonly: this.readonly,
        placeholder: this.placeholder,
        maxlength: this.maxlength || undefined,
        name: this.name || undefined,
      });
    },
  },

  mounted() {
    this.adjustTextareaHeight();
  },

  watch: {
    value() {
      this.adjustTextareaHeight();
    }
  },

  methods: {
    adjustTextareaHeight() {
      if (this.autosize === true) {
        this.textareaStyle = calcTextareaHeight(this.$refs.refTextareaElem as HTMLTextAreaElement);
      } else if (typeof this.autosize === 'object') {
        const { minRows, maxRows } = this.autosize;
        this.textareaStyle = calcTextareaHeight(this.$refs.refTextareaElem as HTMLTextAreaElement, minRows, maxRows);
      } else if (this.$attrs.rows) {
        this.textareaStyle = { height: 'auto', minHeight: 'auto' };
      }
    },

    emitEvent(name: TextareaEmitEvent, value: string | number, context: object) {
      this.$emit(name, value, context);
    },

    focus(): void {
      const input = this.$refs.refInputElem as HTMLInputElement;
      input?.focus();
    },
    blur(): void {
      const input = this.$refs.refInputElem as HTMLInputElement;
      input?.blur();
    },

    handleInput(e: any): void {
      const { target } = e;
      const val = (target as HTMLInputElement).value;
      this.$emit('update:value', val);
      this.emitEvent('change', val, { e: InputEvent });
    },
    emitKeyDown(e: KeyboardEvent) {
      if (this.disabled) return;
      this.emitEvent('keydown', this.value, { e });
    },
    emitKeyUp(e: KeyboardEvent) {
      if (this.disabled) return;
      this.emitEvent('keyup', this.value, { e });
    },
    emitKeypress(e: KeyboardEvent) {
      if (this.disabled) return;
      this.emitEvent('keypress', this.value, { e });
    },
    emitFocus(e: FocusEvent) {
      if (this.disabled) return;
      this.focused = true;
      this.emitEvent('focus', this.value, { e });
    },
    emitBlur(e: FocusEvent) {
      this.focused = false;
      this.emitEvent('blur', this.value, { e });
    },
  },

  render() {
    const inputEvents = getValidAttrs({
      onFocus: this.emitFocus,
      onBlur: this.emitBlur,
      onKeydown: this.emitKeyDown,
      onKeyup: this.emitKeyUp,
      onKeypress: this.emitKeypress,
    });
    const classes = [
      `${name}__inner`,
      {
        [CLASSNAMES.STATUS.disabled]: this.disabled,
        [CLASSNAMES.STATUS.focused]: this.focused,
        [`${prefix}-resize-none`]: this.maxlength,
      },
    ];

    return (
      <div class={`${name}`}>
        <textarea
          onInput={this.handleInput}
          {...inputEvents}
          {...this.$attrs}
          {...this.inputAttrs}
          ref="refTextareaElem"
          value={this.value}
          style={this.textareaStyle}
          class={classes}
        ></textarea>
        {this.maxlength ? (
          <span class={`${name}__limit`}>{`${this.value ? String(this.value)?.length : 0}/${this.maxlength}`}</span>
        ) : null}
      </div>
    );
  },
});
