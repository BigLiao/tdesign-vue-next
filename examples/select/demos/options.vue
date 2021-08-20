<template>
  <div>
    <t-select
      v-model="value"
      style="width: 200px;"
      placeholder="-请选择-"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        label: '上海',
        value: 'shanghai',
      }, {
        label: '北京',
        value: 'beijing',
        disabled: true,
      }, {
        label: '深圳',
        value: 'shenzhen',
      }],
      value: '',
    };
  },
};
</script>
