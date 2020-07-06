<template>
  <!--
    该文件有脚本 tdesign/tdesign-web-vue/src/icon/generate/index.js 自动生成。
    若需要编辑，请编辑源文件：tdesign/tdesign-web-vue/src/icon/generate/demo.tpl 。
  -->
  <div class="t-demo-iconfont">
    <p>目前设计师给到的全部图标</p><br>
    <%= icons %>
  </div>
</template>

<style lang="less">
  .t-demo-iconfont {
    .t-demo-icon {
      width: 130px;
      height: 100px;
      margin-right: 24px;
      display: inline-block;
      text-align: center;
      vertical-align: top;
      .t-icon {
        font-size: 25px;
        margin-right: 0;
        color: #999999;
      }
      .t-icon:hover {
        color: #0052d9;
        font-size: 30px;
      }
      .t-demo-icon-name {
        text-align: center;
        margin-top: 8px;
        font-size: 12px;
      }
    }
  }
</style>
