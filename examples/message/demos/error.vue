<template>
  <div class="t-demo-message">
    <t-message theme="error">用于表示操作引起严重的后果</t-message>
    <t-message theme="error" v-if="closableMsg" closeBtn @click-close-btn="closableMsg = false"
      >用于表示操作引起严重的后果, 可关闭, 通常信息较长</t-message
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      closableMsg: true,
    };
  },
};
</script>
