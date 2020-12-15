<template>
  <section class="tdesign-demo-upload-multiple" style="width: 570px">
    <header class="tdesign-demo-upload-multiple-header">
      <t-upload
        action="//www.mocky.io/v2/5cc8019d300000980a055e76"
        :data="{ foo: 1, bar: 2 }"
        :fileList="fileList"
        :multiple="true"
        :before-upload="beforeUpload"
        @change="handleChange"
        accept="image/*"
      >
        <t-button theme="line" slot="trigger"><t-icon-upload slot="icon"/>选择文件</t-button>
      </t-upload>
    </header>

    <div class="tdesign-demo-upload-table">
      <div class="tdesign-demo-upload-table-header">
        <div class="tdesign-demo-upload-table__name">文件名</div>
        <div class="tdesign-demo-upload-table__size">大小</div>
        <div class="tdesign-demo-upload-table__status">状态</div>
        <div class="tdesign-demo-upload-table__operator">操作</div>
      </div>
      <div v-if="!fileList.length" class="tdesign-demo-upload-table--empty">
        <p>点击上方“选择文件”或将文件拖拽到此区域</p>
      </div>
      <div class="tdesign-demo-upload-table-item" v-for="item in fileList" :key="item.uid">
        <div class="tdesign-demo-upload-table__name">
          <span>{{ item.name }}</span>
        </div>
        <div class="tdesign-demo-upload-table__size">
          <span>{{ getFileSize(item.size) }}</span>
        </div>
        <div class="tdesign-demo-upload-table__status tdesign-demo-upload-table__status--success">
          <t-icon :name="getIcon(item.status).name" :style="'color:' + getIcon(item.status).fill"></t-icon>
          <span>{{ getStatusText(item.status) }}</span>
        </div>
        <div class="tdesign-demo-upload-table__operator">
          <t-button theme="link" size="small" @click="handleDelete(item)">删除</t-button>
        </div>
      </div>
    </div>

    <div class="tdesign-demo-upload-bottom">
      <button class="t-button t-button--line">取消</button>
      <button class="t-button t-button--primary">开始上传</button>
    </div>
  </section>
</template>
<script>
import TIconUpload from '@tencent/tdesign-vue/lib/icon/upload';

export default {
  components: {
    TIconUpload,
  },
  data: () => ({
    fileList: [],
  }),
  methods: {
    handleChange(fileList) {
      console.log(fileList);
    },

    handleDelete(file) {
      this.fileList = this.fileList.filter(item => item.uid !== file.uid);
    },

    beforeUpload() {
      return true;
    },

    getStatusText(status) {
      return {
        success: '上传成功',
        fail: '上传失败',
        progress: '上传中',
      }[status];
    },

    getFileSize(size) {
      return `${(size / 1024 / 1024).toFixed(2)}Mb`;
    },

    getIcon(status) {
      return {
        success: { name: 'check-circle-filled', fill: 'green' },
        fail: { name: 'error-circle-filled', fill: '#ff3e00' },
        progress: { name: 'loading', fill: '#0052d9' },
      }[status];
    },
  },
};
</script>
