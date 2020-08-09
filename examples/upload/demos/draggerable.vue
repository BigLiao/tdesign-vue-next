<script>
export default {
  data: () => ({
    dragActive: false,
  }),
  methods: {
    handleDragenter() {
      this.dragActive = true;
    },
    handleDragleave() {
      this.dragActive = false;
    },
    handleFail({ file }) {
      this.$message.error(`文件 ${file.name} 上传失败`);
    },
    handleSuccess({ file }) {
      this.$message.success(`文件 ${file.name} 上传成功`);
    },
    handleChange(fileList) {
      console.log(fileList);
    },
  },
};
</script>
<template>
  <div
    class="tdesign-demo-upload t-upload tdesign-demo-upload__column"
    :class="dragActive ? 't-is--active' : ''">
    <t-upload
      action="//www.mocky.io/v2/5cc8019d300000980a055e76"
      :drag="true"
      @dragenter="handleDragenter"
      @fail="handleFail"
      @success="handleSuccess"
      @dragleave="handleDragleave"
      @change="handleChange">
    </t-upload>
    <div class="tdesign-demo-upload-tip">上传任意文件</div>
  </div>
</template>
