<template>
  <div>
    <!-- attach挂载 -->
    <t-button theme="primary" @click="visibleBody = true">挂载在body</t-button>
    <t-button theme="primary" @click="visibleIdAttach = true">挂载特定元素</t-button>
    <t-button theme="primary" @click="visibleFunctionAttach = true">挂载函数返回节点</t-button>
    <br> <br>

    <!-- mode -->
    <t-button theme="primary" @click="visibleModal = true">模态对话框</t-button>
    <t-button theme="primary" @click="visibleNormal = true">普通对话框</t-button>
    <t-button theme="primary" @click="visibleModelessDrag = true">非模态对话框-可拖拽</t-button>
    <t-button theme="primary" @click="visibleModeless = true">非模态可拖拽</t-button>
    <br>

    <t-dialog
      v-model:visible="visibleBody"
      attach="body"
      header="挂载在body"
      :onConfirm="()=>this.visibleBody = false"
    >
      <template #body>
        <div>我是被挂载到body元素的对话框</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

    <t-dialog
      v-model:visible="visibleIdAttach"
      attach="#app"
      header="挂载到id为app的元素"
      :onConfirm="()=>this.visibleIdAttach = false"
    >
      <template #body>
        <div>通过querySelect指定元素挂载</div>
        <div>支持原生document.querySelect选择元素</div>
        <div>querySelect获取到的第一个元素为挂载点</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

    <t-dialog
      v-model:visible="visibleFunctionAttach"
      :attach="getAttach"
      header="函数返回挂载节点"
      :onConfirm="()=>this.visibleFunctionAttach = false"
    >
      <template #body>
        <div>指定函数返回的节点为挂载点</div>
        <div>函数返回为DOM节点对象</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

    <t-dialog
      header="模态对话框"
      v-model:visible="visibleModal"
      mode="modal"
      draggable
      :onConfirm="()=>this.visibleModal = false"
    >
      <template #body>
        <div>默认点击蒙层或按ESC可关闭</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

    <t-dialog
      header="普通对话框"
      v-model:visible="visibleNormal"
      mode="normal"
      :onConfirm="()=>this.visibleNormal = false"
    >
      <template #body>
        <div>普通对话框不可拖拽</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

    <t-dialog
      header="非模态对话框-可拖拽"
      v-model:visible="visibleModelessDrag"
      mode="modeless"
      draggable
      :onConfirm="()=>this.visibleModelessDrag = false"
    >
      <template #body>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

    <t-dialog
      header="非模态对话框-不可拖拽"
      v-model:visible="visibleModeless"
      mode="modeless"
      :onConfirm="()=>this.visibleModeless = false"
    >
      <template #body>
        <div>我是内容</div>
        <div>我是内容</div>
      </template>
    </t-dialog>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      visibleBody: false,
      visibleIdAttach: false,
      visibleFunctionAttach: false,
      visibleModal: false,
      visibleNormal: false,
      visibleModelessDrag: false,
      visibleModeless: false,
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
