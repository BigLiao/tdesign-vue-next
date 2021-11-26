<template>
  <t-popconfirm theme="default" content="您确定要提交吗" @confirm="confirm" @cancel="cancel">
    <t-button theme="primary"> 提交 </t-button>
  </t-popconfirm>
</template>
<script>
import { defineComponent } from 'vue';
import { MessagePlugin } from '@tencent/tdesign-vue-next';

export default defineComponent({
  setup() {
    return {
      confirm(e) {
        console.log(e);
        MessagePlugin.info('Click on Yes');
      },
      cancel(e) {
        console.log(e);
        MessagePlugin.info('Click on No');
      },
    };
  },
});
</script>
