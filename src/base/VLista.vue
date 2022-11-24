<template>
    <ul class="item-lista">
        <li 
            v-for="element in lista"  
            :key="element.id">
            <router-link :to="{ name: 'item-detail', params: { id: element.id }}">
              {{ element.name}}
            </router-link>
        </li>
    </ul>
</template>
  
<script>
  export default {
    name: "VLista",
    props: {
        lista: Array,
    }

  };
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lista__{
  
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
  