<template>
  <div id="app">
    <!--按钮-->
   <el-button type="primary">主要按钮</el-button>
    <!--日历-->
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    <!--环形进度条-->
    <div class="my-circle">
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <!--分页-->
    <el-pagination
    layout="prev, pager, next"
    :total="1000">
    </el-pagination>
    <!--请求数据-->
    <myButton @click.native="get"></myButton>
    <p>{{myMes}}</p>
  </div>
</template>

<script>
import myButton from './components/Button.vue'
import axios from 'axios'
export default {
  components:{
    myButton
  },
  name: 'app',
  data () {
    return {
      value1: '',
      myMes:'无数据'
    }
  },
  methods:{
    get(){
      axios.get('./a.txt')
      .then(function(res){
        this.myMes = res.data;
      }.bind(this))
      .catch(function(err){
        console.log(err);
    })
    }
  }
}
</script>

<style lang="scss">
  .my-circle{
    margin: 30px;
  }
</style>
