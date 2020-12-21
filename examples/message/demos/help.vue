<template>
  <div class="t-demo-message">
    <t-message theme="question">用于帮助用户操作的信息提示</t-message>
    <t-message theme="question" v-if="closableMsg" closeBtn @click-close-btn="closableMsg = false"
    >用于帮助用户操作的信息提示, 可关闭, 通常信息较长</t-message
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
