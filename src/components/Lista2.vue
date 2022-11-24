<template>
  <div class="lista__">
    <h3>{{ title }}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit reprehenderit placeat corporis accusantium, alias cupiditate ipsa cumque nam assumenda, porro dicta! Voluptatum, delectus. Aut impedit aliquid id tempore deserunt.</p>
  </div>
</template>
  
<script>
  import dataLocal from '@/assets/dataLocal.json'

  export default {
    name: "Lista2",
    props: {
        title: String
    },

    data(){
      return {
        lista2: dataLocal
      }
    },
  };
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  