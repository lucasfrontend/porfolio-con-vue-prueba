<template>
  <main class="home">
    <Home />
  </main>
  </template>
  
  <script>
  import Home from '@/components/Home.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Home
    }
  }
  </script>

<style lang="scss" scoped>
.home{
  background-image: url('../assets/headfly.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  min-height: 100vh;
}
</style>