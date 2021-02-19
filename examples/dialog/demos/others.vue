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
      :visible.sync="visibleBody"
      attach="body"
      header="挂载在body"
      :onClickConfirm="()=>this.visibleBody = false"
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
      :visible.sync="visibleIdAttach"
      attach="#app"
      header="挂载到id为app的元素"
      :onClickConfirm="()=>this.visibleIdAttach = false"
    >
      <div slot="body">
        <div>通过querySelect指定元素挂载</div>
        <div>支持原生document.querySelect选择元素</div>
        <div>querySelect获取到的第一个元素为挂载点</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleFunctionAttach"
      :attach="getAttach"
      header="函数返回挂载节点"
      :onClickConfirm="()=>this.visibleFunctionAttach = false"
    >
      <div slot="body">
        <div>指定函数返回的节点为挂载点</div>
        <div>函数返回为DOM节点对象</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>

    <t-dialog
      header="模态对话框"
      :visible.sync="visibleModal"
      mode="modal"
      draggable
      :onClickConfirm="()=>this.visibleModal = false"
    >
      <div slot="body">
        <div>默认点击蒙层或按ESC可关闭</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>

    <t-dialog
      header="普通对话框"
      :visible.sync="visibleNormal"
      mode="normal"
      :onClickConfirm="()=>this.visibleNormal = false"
    >
      <div slot="body">
        <div>普通对话框不可拖拽</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>

    <t-dialog
      header="非模态对话框-可拖拽"
      :visible.sync="visibleModelessDrag"
      mode="modeless"
      draggable
      :onClickConfirm="()=>this.visibleModelessDrag = false"
    >
      <div slot="body">
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    </t-dialog>

    <t-dialog
      header="非模态对话框-不可拖拽"
      :visible.sync="visibleModeless"
      mode="modeless"
      :onClickConfirm="()=>this.visibleModeless = false"
    >
      <div slot="body">
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
