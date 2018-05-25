<template>
  <div id="app">
    <my-header></my-header>
    <div style="display: flex;width:100%;min-height: 50em">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/myHeader'
import Sidebar from './components/sidebar'
export default {
  name: 'App',
  components: {Sidebar, MyHeader}
}
</script>

<style>
  body,html{
    width: 100%;
    height: 100%;
  }
  body,div,p{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
