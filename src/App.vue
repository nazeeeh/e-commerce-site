<template>
  <div id="app">
    <Header />

          <router-view></router-view>
        
        <Footer />

        
  </div>
</template>

<script>


export default {
  name: 'App',
}
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 background-color: #eee;
  
}

</style>
