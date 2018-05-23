<template>
    <div class="sidebar">
      <div class="search-container">
        <input type="text" class="search"/>
      </div>
      <sider-list :listTitle="title1" :list="list1" style="margin-top: 3em"></sider-list>
    </div>
</template>

<script>
import SiderList from './sider-list'

export default {
  name: 'sidebar',
  components: {SiderList},
  data: function () {
    return {
      list1: [],
      title1: '设计师学院'
    }
  },
  created: function () {
    this.getData('static/list1.json')
  },
  methods: {
    getData: function (url) {
      var that = this
      this.$http.get(url).then(response => {
        console.log('数据加载成功')
        var list = eval(response.data)
        console.log(list[0]['单项'])
        that.list1 = list
        // self.tableContent.push(response.body);
      }, response => {
        console.log('数据加载失败')
      })
    }
  }
}
</script>

<style scoped>
  .sidebar{
    border-right: 1px solid lightgray;
    width: 19em;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .search-container{
    width: 100%;
    height: 3.5em;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search{
    font-size: 1.5em;
    text-indent: 1em;
    width: 80%;
    height: 60%;
    border-radius: 5px;
    outline: none;
    border: solid 1px gray;
  }
  .items-container{
    width: 100%;
    height: 100%;
  }
</style>
