<template>
  <div class="container">
    <div class="title">{{listTitle}}</div>
    <div v-for="(item,index) in list" v-bind:key="index" class="item">
      <router-link v-bind:to="item.link" class="link-style">{{item.text}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sider-list',
  props: {
    list: {
      type: Array
    },
    listTitle: {
      type: String
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }
  .title{
    color: black;
    font-size: 1.3em;
    text-indent: 1em;
    width: 100%;
    height: 2em;
    display: flex;
    align-items: center;
  }
  .item{
    display: flex;
    color: gray;
    margin-left: 3em;
    font-size: 1em;
    width: fit-content;
    height: 2em;
    align-items: center;
  }
  .link-style:hover{
    cursor: pointer;
    color: green;
  }
  .link-style:focus{
    color: #005800;
  }
  .link-style{
    text-decoration: none;
    color: gray;
  }
</style>
