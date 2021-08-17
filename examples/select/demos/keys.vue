<template>
  <div>
    <t-select
      v-model="value"
      style="width: 200px;display: inline-block;margin-right: 20px;"
      placeholder="-请选择-"
      :keys="{value: 'data', label:'text'}"
      :options="options"
    />
    <t-select
      v-model="value2"
      placeholder="-请选择-"
      :keys="{value: 'city.id', label:'city.name'}"
      :options="options2"
      style="width: 200px;display: inline-block;"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          text: '已选择的选项',
          data: '1',
        },
        {
          text: '短的选项二',
          data: '2',
        },
        {
          text: '很长很长很长的选项三',
          data: '3',
        },
      ],
      options2: [
        {
          city: {
            id: 'shanghai',
            name: '上海',
          },
        },
        {
          city: {
            id: 'shenzhen',
            name: '深圳',
          },
        },
        {
          city: {
            id: 'guangzhou',
            name: '广州',
          },
          disabled: true,
        },
      ],
      value: '1',
      value2: 'shanghai',
    };
  },
};
</script>
