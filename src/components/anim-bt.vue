<template>
    <div class="border-anim">
      <slot></slot>

      <div v-if="animStyle==='bb-anim'" class="b-container"
           @mouseover="bbWidth='50%'" @mouseleave="bbWidth=0">  <!-- border-bottom animation -->
        <div class="lbb" v-bind:style="{width:bbWidth}"></div>
        <div class="rbb" v-bind:style="{width:bbWidth}"></div>
      </div>

      <div v-if="animStyle==='b-anim'" class="b-container"
           @mouseover="bWidth='100%';bHeight='100%'" @mouseleave="bWidth=0;bHeight=0">   <!-- border animation -->
        <div class="tb" v-bind:style="{width:bWidth}"></div>
        <div class="bb" v-bind:style="{width:bWidth}"></div>
        <div class="lb" v-bind:style="{height:bHeight}"></div>
        <div class="rb" v-bind:style="{height:bHeight}"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'anim-bt',
  props: {
    animStyle: {
      tyle: String,
      validator: function (value) {
        return ['b-anim', 'bb-anim'].indexOf(value) !== -1
      }
    }
  },
  data: function () {
    return {
      bbWidth: 0,
      bWidth: 0,
      bHeight: 0
    }
  }

}
</script>

<style scoped>
  .border-anim{
    position: relative;
    cursor: pointer;
  }
  .b-container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .lbb{
    border-bottom: 1px solid green;
    position: absolute;
    height: 100%;
    right: 50%;
    transition: width 1s;
  }
  .rbb{
    border-bottom: 1px solid green;
    position: absolute;
    height: 100%;
    left: 50%;
    transition: width 1s;
  }

  .tb{
    border-top: 1px solid green;
    position: absolute;
    height: 100%;
    left: 0;
    transition: width 1s;
    box-sizing: border-box;
  }

  .bb{
    border-bottom: 1px solid green;
    position: absolute;
    height: 100%;
    right: 0;
    transition: width 1s;
    box-sizing: border-box;
  }

  .lb{
    border-left: 1px solid green;
    position: absolute;
    width: 100%;
    top: 0;
    transition: height 1s;
    box-sizing: border-box;
  }

  .rb{
    border-right: 1px solid green;
    position: absolute;
    width: 100%;
    bottom: 0;
    transition: height 1s;
    box-sizing: border-box;
  }
</style>
