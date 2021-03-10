<template>
  <div>
    <t-select
      v-model="value"
      class="demo-select-base"
      clearable
      :keys="{value: 'data', label:'text'}"
      @change="handleChange"
      @visible-change="visibleChange"
    >
      <t-option
        v-for="(item, index) in options"
        :value="item.data"
        :label="item.text"
        :key="index"
      >
        {{ item.text }}
      </t-option>
    </t-select>
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
      value: '1',
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    visibleChange(val) {
      console.log('visible', val);
    },
  },
};
</script>
<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 20px;
}
</style>
