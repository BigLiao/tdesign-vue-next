<template>
  <div class="popconfirm-demo">
    <div class="tdesign-demo-block">
      <t-popconfirm theme="info">
        <template slot="content">
          <p class="title">带描述的气泡确认框文字按钮</p>
          <p class="describe">
            带描述的气泡确认框在主要说明之外增加了操作相关的详细描述带描述的气泡确认框在主要说明之外增加了操作
          </p>
        </template>
        <t-button theme="primary">默认</t-button>
      </t-popconfirm>
      <t-popconfirm theme="info" content="最小">
        <t-button theme="primary">最小</t-button>
      </t-popconfirm>
    </div>
  </div>
</template>

<style scoped>
.popconfirm-demo .tdesign-demo-block {
  display: flex;
  justify-content: space-around;
}

.title {
  font-weight: 500;
  font-size: 16px;
}
.describe {
  margin-top: 10px;
  color: rgb(153, 153, 153);
}
</style>
