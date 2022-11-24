<template>
  <div class="lista__">
    <h3>{{ title }}</h3>
    <v-lista 
      :lista="lista1"
    />
  </div>
</template>

<script>
import axios from 'axios'
import VLista from '@/base/VLista.vue';

export default {
  name: "Lista1",
  props: {
        title: String
  },
  components: {
    VLista
  },
  data(){
    return {
      lista1: []
    }
  },
  methods: {
    getWheater: async function () {
      axios.get('https://jsonplaceholder.typicode.com/users').then(
        (response) => {
          this.lista1 = response.data
          console.log(response)
          
        }
      )
    }
  },
  beforeMount () {
    this.getWheater();
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
