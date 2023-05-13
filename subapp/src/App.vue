<template>
  <div class="main">
    
    <div class="link">
      <div>subapp</div>
      <router-link to="customiec">subapp - customiec</router-link>

      <router-link to="children">subapp - children</router-link>

    </div>

    <div class="view">
      <router-view/>
    </div>

  </div>
  <!-- <router-view/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#sub {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main{
  display: flex;

}
.link{
  display: flex;
  flex-direction: column;
}
.view{
  display: flex;
  margin-left: 30px;

}
</style>
