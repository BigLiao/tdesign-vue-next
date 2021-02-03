<template>
  <t-popconfirm theme="default"
                content="您确定要提交吗"
                @confirm="confirm"
                @cancel="cancel"
  >
    <t-button theme="primary">提交</t-button>
  </t-popconfirm>
</template>
<script>
export default {
  methods: {
    confirm(e) {
      console.log(e);
      this.$message.info('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      this.$message.info('Click on No');
    },
  },
};
</script>
