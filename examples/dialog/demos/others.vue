<template>
  <div>
    <t-button theme="primary" @click="()=>this.visibleNotModal = true">非模态可拖拽</t-button>
    <t-button theme="primary" @click="()=>this.visibleBody = true">挂载在body</t-button>
    <t-button theme="primary" @click="()=>this.visibleIdAttach = true">挂载特定元素</t-button>
    <t-button theme="primary" @click="()=>this.visibleFunctionAttach = true">挂载函数返回节点</t-button>
    <t-dialog
      header="对话框标题"
      body="对话框内容"
      v-model="visibleNotModal"
      @click-close-btn="(close)=>close()"
      mode="not-modal"
      draggable
    ></t-dialog>
    <t-dialog
      v-model="visibleBody"
      @click-close-btn="(close)=>close()"
      attach="body"
      header="全局对话框"
    >
      <div slot="body">
        <div>我是被挂载到body元素的对话框</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>
    <t-dialog
      v-model="visibleIdAttach"
      @click-close-btn="(close)=>close()"
      attach="#app"
      header="挂载到id为app的元素"
    >
      <div slot="body">
        <div>通过querySelect指定元素挂载</div>
        <div>支持原生document.uerySelect选择元素</div>
        <div>querySelect获取到的第一个元素为挂载点</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>
    <t-dialog
      v-model="visibleFunctionAttach"
      @click-close-btn="(close)=>close()"
      :attach="getAttach"
      header="函数返回挂载节点"
    >
      <div slot="body">
        <div>指定函数返回的节点为挂载点</div>
        <div>函数返回为DOM节点对象</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      visibleNotModal: false,
      visibleBody: false,
      visibleIdAttach: false,
      visibleFunctionAttach: false,
    };
  },
  methods: {
    getAttach() {
      return this.$root.$el;
    },
  },
});
</script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
