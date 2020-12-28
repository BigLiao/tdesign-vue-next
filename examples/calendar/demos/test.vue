<template>
  <t-calendar></t-calendar>
</template>

<script>
export default {
  data() {
    return {
      value: '1998/11/11',
    };
  },
  created() {
    setTimeout(() => {
      this.value = new Date(2000, 11, 25);
    }, 3000);
  },
};
</script>
