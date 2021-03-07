
<template>
  <t-calendar
    :range="range"
    :head="renderHead"
    :cell="renderCell"
    :cellAppend="renderCellAppend"
    :controllerConfig="controllerConfig"
  >
  </t-calendar>
</template>

<script>

export default {
  data() {
    return {
      range: [
        new Date(2017, 7),
        new Date(2027, 3),
      ],
      soltContent: 'hello TDesign',
      controllerConfig: {
        disabled: false, // 是否禁用（全部控件）
        // 模式切换单选组件设置
        mode: {
          visible: true, // 是否显示
          radioGroupProps: {
            disabled: false,
            buttonStyle: 'solid',
          },
        },
        // 年份选择框组件相关设置
        year: {
          visible: true, // 是否显示
          selecteProps: {
            // 用于透传props给该select组件
            disabled: false,
          },
        },
        // 年份选择框组件相关设置
        month: {
          visible: true, // 是否显示（“year”模式下本身是不显示该组件的）
          selecteProps: {
            // 用于透传props给该select组件
            disabled: false,
          },
        },
        // 隐藏\显示周末按钮组件相关设置
        weekend: {
          visible: true, // 是否显示
          showWeekendButtonProps: {
            // 用于透传props给显示周末按钮组件
            disabled: false,
            theme: 'default',
          },
          hideWeekendButtonProps: {
            // 用于透传props给隐藏周末按钮组件
            disabled: false,
            theme: 'danger',
          },
        },
        // “今天\本月”按钮组件相关设置
        current: {
          visible: true, // 是否显示
          currentDayButtonProps: {
            // 用于透传props给“今天”钮组件（“month”模式下有效）
            disabled: false,
            theme: 'default',
          },
          currentMonthButtonProps: {
            // 用于透传props给“本月”按钮组件（“year”模式下有效）
            disabled: false,
            theme: 'default',
          },
        },
      },
    };
  },
  methods: {
    renderHead(h, params) {
      let title = params.filterDate.getFullYear();
      if (params.mode === 'month') {
        title += `-${params.filterDate.getMonth() + 1}`;
      }
      title += ' 工作安排';

      return <h1 style="color:#0052D9">{title}</h1>;
    },
    renderCell(h, params) {
      return h(
        'span',
        {
          style: {
            fontWeight: params.isCurrent ? 700 : 500,
          },
          on: {
            click() {
              console.info(params);
            },
          },
        },
        params.formattedDate
      );
    },
    renderCellAppend(h, params) {
      return h(
        'span',
        {
          style: {
            fontWeight: params.isCurrent ? 700 : 500,
          },
        },
        params.formattedDate
      );
    },
  },
};
</script>
