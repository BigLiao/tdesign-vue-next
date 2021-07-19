<template>
  <div class="popconfirm-demo">
    <div class="tdesign-demo-block">
      <t-popconfirm content="基础气泡确认框文案示意文字按钮">
        <t-button>默认</t-button>
      </t-popconfirm>
      <t-popconfirm theme="warning" content="事件通知类型偏向于警示">
        <t-button>警示</t-button>
      </t-popconfirm>
      <t-popconfirm theme="danger" content="事件通知类型偏向于高危提醒">
        <t-button>警告</t-button>
      </t-popconfirm>
    </div>
  </div>
</template>

<style scoped>
.popconfirm-demo .tdesign-demo-block {
  display: flex;
  justify-content: space-around;
}
</style>
