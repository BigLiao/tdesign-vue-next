<template>
  <div>
    <p>底部按钮有两个控制属性：confirmContent 和 cancelContent。属性类型有多种：string/function/object/boolean。</p><br>
    <t-button theme="primary" @click="()=>this.visible1 = true">自定义底部按钮（文字）</t-button>
    <t-button theme="primary" @click="()=>this.visible2 = true">自定义底部按钮（任何按钮属性）</t-button>
    <t-button theme="primary" @click="()=>this.visible3 = true">自定义底部按钮（自定义组件）</t-button>

    <t-dialog
      v-model="visible1"
      @close="(close)=>close()"
      header="提示"
      body="自定义底部按钮，直接传入文字"
      confirmContent="前往支付"
      cancelContent="关闭"
    >
    </t-dialog>

    <t-dialog
      v-model="visible2"
      @close="(close)=>close()"
      header="提示"
      body="自定义底部按钮，传入 ButttonProps"
      :confirmContent="{
        content: '前往购物车',
        theme: 'warning',
      }"
      :cancelContent="{
        content: '我知道了',
        theme: 'ghost',
      }"
    >
    </t-dialog>

    <t-dialog
      v-model="visible3"
      @close="(close)=>close()"
      header="提示"
      body="自定义底部按钮，传入自定义组件"
      :confirmContent="getConfirmBtn"
      :cancelContent="false"
    >
    </t-dialog>

  </div>
</template>
<script>
import TButton from '../../../../src/button';

export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    getConfirmBtn() {
      return <TButton theme='primary' disabled>我知道了</TButton>;
    },
  },
};
</script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
