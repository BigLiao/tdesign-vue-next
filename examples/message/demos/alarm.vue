<template>
  <div class="t-demo-message">
    <t-message theme="warning">用于表示操作引起一定后果</t-message>
    <t-message theme="warning" v-if="closableMsg" closeBtn @click-close-btn="closableMsg = false"
      >用于表示操作引起一定后果, 可关闭, 通常信息较长</t-message
    >
    <t-button :disabled="closableMsg" @click="closableMsg = !closableMsg">显示关闭信息</t-button>
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
