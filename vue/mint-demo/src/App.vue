<template>
  <div id="app">
    <mt-header fixed title="fixed top"></mt-header>
    <div class="my-btn">
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <img slot="icon" src="./assets/logo.png">
          tab1
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <img slot="icon" src="./assets/logo.png">
          tab2
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <img slot="icon" src="./assets/logo.png">
          tab3
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <img slot="icon" src="./assets/logo.png">
          tab4
        </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: ''
    }
  }
}
</script>

<style lang="scss">
.my-btn {
  margin: 50px;
}

</style>
