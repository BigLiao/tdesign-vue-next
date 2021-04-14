import { defineComponent } from 'vue';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import checkboxProps from '@TdTypes/checkbox/props';

const name = `${prefix}-checkbox`;

export default defineComponent({
  name,
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: { ...checkboxProps },
  computed: {
    labelClasses(): ClassName {
      return [
        `${name}`,
        {
          [CLASSNAMES.STATUS.checked]: this.checked$,
          [CLASSNAMES.STATUS.disabled]: this.disabled$,
          [CLASSNAMES.STATUS.indeterminate]: this.indeterminate,
        },
      ];
    },
    checkboxGroup(): any {
      return this.getGroup();
    },
    isCheckAllOption(): boolean {
      return this.$attrs['data-name'] === 'TDESIGN_CHECK_ALL';
    },
    disabled$(): boolean {
      if (this.disabled !== undefined) return this.disabled;
      return !!(this.checkboxGroup && this.checkboxGroup.disabled);
    },
    name$(): string {
      return this.name || (this.checkboxGroup && this.checkboxGroup.name);
    },
    checked$(): boolean {
      if (this.checkboxGroup && this.checkboxGroup.checkedMap && !this.isCheckAllOption) {
        return this.checkboxGroup.checkedMap[this.value];
      }
      return this.checked;
    },
  },

  render() {
    return (
      <label class={this.labelClasses}>
        <input
          type='checkbox'
          class={`${name}__former`}
          disabled={this.disabled$}
          readonly={this.readonly}
          indeterminate={this.indeterminate}
          name={this.name$}
          value={this.value}
          checked={this.checked$}
          onChange={this.handleChange}
        ></input>
        <span class={`${name}__input`}></span><span class={`${name}__label`}>
          {this.$slots.default() && this.$slots.default(null)}
        </span>
      </label>
    );
  },

  methods: {
    handleChange(e: Event) {
      const target = e.target as HTMLInputElement;
      this.$emit('change', target.checked, { e });
      (typeof this.onChange === 'function') && this.onChange(target.checked, { e });
      e.stopPropagation();
      if (this.checkboxGroup && this.checkboxGroup.handleCheckboxChange && !this.isCheckAllOption) {
        this.checkboxGroup.handleCheckboxChange({ checked: target.checked, e, option: this.$props });
      }
    },
    getGroup() {
      const groupName = `${prefix}-checkbox-group`;
      let parent = this.$parent;
      let i = 0;
      while (parent && parent.$options) {
        if (parent.$options.name === groupName) {
          break;
        }
        parent = parent.$parent;
        i = i + 1;
        if (i >= 2) {
          break;
        };
      }
      return parent;
    },
  },
});
