<template>
  <div id="app">
   <el-button type="primary" icon="search">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple my-grid">
          <Date></Date>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light my-grid"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple my-grid"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import Date from './components/Date.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      Date
  }
}
</script>

<style scope lang="less">
@color:red;
.height(@h){
  height: @h;
};
.my-grid{
  border: 1px solid @color;
  .height(30px);
}
</style>
