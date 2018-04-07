<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <el-row>
      <el-col :span="6">
        <el-input v-model="newItem" placeholder="Enter new item" @keyup.enter.native="addItem"></el-input>
        <ul>
          <li v-for="item in items" @click="toggleFinish(item)">
            {{ item.label }}
            <i v-show="item.isFinished" class="el-icon-success"></i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    //使用ES6特性引入 localstorage 储存脚本，命名为 Storage
    import Storage from './store.js'

export default {
  name: 'app',
  data () {
    return {
        title: 'This is a todo list',
        items: Storage.fetch(),//获取存在 storage 里面的键值对
        newItem: ''
    }
  },
    methods: {
      toggleFinish: function(item){
          item.isFinished = !item.isFinished
      },
        addItem: function(){
          this.items.push(
              {
                  label: this.newItem,
                  isFinished: false
              }
          )
            this.newItem = null
        }
    },
    watch:{
        items:{
            handler: function (items) {
                console.log(items)
                Storage.save(items);//监控li变化，将新增的值存入 sessionStorage 里
            },										//sessionStorage 里的数据将在页面关闭后删除
            deep:true							//深度监视，只要 items 有一点改变就会触发回调函数handler
        }
    }
}
</script>

<style>
li{
  cursor: pointer;
}
</style>
