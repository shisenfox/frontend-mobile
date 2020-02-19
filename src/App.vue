<template>
  <div id="app">
    <router-view />
    <Tabbar v-if="this.$store.state.navBarFlag"></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/common/NavTabbar'
export default {
   components: {
    Tabbar,
  },
  data(){
    return{
      flag:true,
    }
  },
}
</script>>
<style lang="less">
body,
html {
  height: 100vh;
}
body {
  background-color: #fafafa;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
