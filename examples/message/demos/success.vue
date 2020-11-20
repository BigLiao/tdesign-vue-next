<template>
  <div class="t-demo-message">
    <t-message theme="success">用于表示操作顺利达成</t-message>
    <t-message theme="success" v-if="closableMsg" closeBtn @click-close-btn="closableMsg = false"
      >用于表示操作顺利达成, 可关闭, 通常信息较长</t-message
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
