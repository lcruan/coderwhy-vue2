<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
  name: 'App',
  data() {
    return {
      message: "Hello webpack!",
      name: "coderywhy",
    };
  },
  methods: {
    btnClick() {},
  },
  components: {
      Cpn
  }
};
</script>

<style scoped>
.title {
    color: green;
}
</style>