<template>
  <div class="container">
    <div class="demo">
      <div class="abp" @mouseover="showAB=true" @mouseleave="showAB=false">
        <transition name="ab">
          <div class="anim-bottom" v-if="showAB"></div>
        </transition>
        <p>前端学院</p>
      </div>

      <div class="abp" @mouseover="transW='50%'" @mouseleave="transW=0">
        <p>前端学院</p>
        <div class="trans-bottom1" v-bind:style="{'--w':transW}"></div>
        <div class="trans-bottom2" v-bind:style="{'--w':transW}"></div>
      </div>

      <div class="abp" @mouseover="myW='100%';myH='100%'" @mouseleave="myW=0;myH='0'">
        <p>前端学院</p>
        <div class="lb-trans" v-bind:style="{height:myH}"></div>
        <div class="rb-trans" v-bind:style="{height:myH}"></div>
        <div class="tb-trans" v-bind:style="{width:myW}"></div>
        <div class="bb-trans" v-bind:style="{width:myW}"></div>
      </div>

      <anim-bt :animStyle="'b-anim'"
               style="margin-top: 2em;font-size: 1.2em;padding: 0.2em 0.4em">
        可控制长度,边框距离，可选动画
      </anim-bt>
    </div>
  </div>
</template>

<script>
import AnimBt from './anim-bt'
export default {
  name: 'bddemo1',
  components: {AnimBt},
  data: function () {
    return {
      points: [],
      showAB: false,
      transW: 0,
      myH: '0',
      myW: '0'
    }
  },
  created: function () {

  },
  methods: {

  }
}
</script>
<style scoped>
  .container{
    width: auto;
    margin-left: 5em;
  }
  .demo{
    width: 30em;
    height: 30em;
    margin-top: 5em;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .abp{
    margin-top: 2em;
    width: 5em;
    height: 2.2em;
    position: relative;
    display: flex;
    font-size: 1.2em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .trans-bottom1{
    --w:0;
    position: absolute;
    border-bottom: solid 0.12em green;
    width: var(--w);
    height: 100%;
    right: 50%;
    transition: width 1s;
  }

  .trans-bottom2{
    --w:0;
    position: absolute;
    border-bottom: solid 0.12em green;
    width: var(--w);
    height: 100%;
    left: 50%;
    transition: width 1s;
  }

  .anim-bottom{
    position: absolute;
    border-bottom: solid 0.12em black;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .lb-trans{
    position: absolute;
    width: 100%;
    height: 0;
    top: 0;
    border-left: 1px solid green;
    transition: height 1s;
    box-sizing: border-box;
  }

  .rb-trans{
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    border-right: 1px solid green;
    transition: height 1s;
    box-sizing: border-box;
  }

  .tb-trans{
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    border-top: 1px solid green;
    transition: width 1s;
    box-sizing: border-box;
  }

  .bb-trans{
    position: absolute;
    width: 0;
    height: 100%;
    right: 0;
    border-bottom: 1px solid green;
    transition: width 1s;
    box-sizing: border-box;
  }

  .ab-enter-active{
    animation: bb-stretch .5s;
  }

  .ab-leave-active{
    animation: bb-shrink .5s;
  }

  @keyframes bb-stretch{
    0%{
      clip: rect(0,2.5em,2.2em,2.5em);

    }
    100%{
      clip: rect(0,5em,2.2em,0em);
    }
  }

  @keyframes bb-shrink{
    0%{
      clip: rect(0,5em,2.2em,0em);

    }
    100%{
      clip: rect(0,2.5em,2.2em,2.5em);
    }
  }
</style>
