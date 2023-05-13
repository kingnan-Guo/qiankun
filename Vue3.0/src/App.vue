<template>
  <div class="main">
    <div class="link">
      <router-link to="/home">main home</router-link>
      <router-link to="/vue-children/children">sub children</router-link>
    </div>

    <div class="view">
      <router-view/>
      <div id="subapp-container"></div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
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
