import { defineComponent } from 'vue';
import { prefix } from '../config';
import { copyText } from '../utils/clipboard';
import Message from '../message/plugin';
import TIconFileCopy from '../icon/file-copy';
import props from '../../types/anchor-target/props';

const name = `${prefix}-anchor-target`;
export default defineComponent({
  name,

  components: {
    TIconFileCopy,
  },

  props: { ...props },

  methods: {
    /**
     * 复制当前target的链接
     *
     */
    copyText(): void {
      // 通过构造一个a标签, 自动拼接好传入的id为href
      const a = document.createElement('a');
      a.href = `#${this.id}`;
      copyText(a.href);
      Message.success('链接复制成功', 1000);
    },
  },
  render() {
    const {
      $slots: { default: children },
      id,
    } = this;
    const Tag: any = this.tag;
    const className = [name];
    const iconClassName = `${prefix}-copy`;
    return (
      <Tag id={id} class={className}>
        {children && children(null)}
        <t-popup content="复制链接" placement="top" showArrow class={iconClassName}>
          <t-icon-file-copy name="file-copy" onClick={this.copyText} />
        </t-popup>
      </Tag>
    );
  },
});
