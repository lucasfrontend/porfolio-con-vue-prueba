<template>
  <div class="container">
    <div class="row">
      <h3 class="mt-4 mb-4">Glosario</h3>

      <input 
        type="text" 
        placeholder="Buscar" 
        class="mb-4"
        v-model="searchValue"
        >
        <!--
        <p>EL valor buscado es: {{ searchValue }}</p>
        -->
        <div
        v-for="(word, index) in glossary"
        :key="index"
        > 
      </div>

      <div class="col"
              v-for="word in wordList"
              :key="word.id">            
              <v-card-word class="row"
                  :name="word.name"
                  :description="word.description"
                  :img="word.img"
                  :alt ="word.alt"
              />
          </div>
    </div> 

  </div>
</template>

<script>
import VCardWord from '@/components/items/VCardWord'
import dataLocal from '@/assets/dataLocal.json'
console.log(dataLocal)

export default {
    name: 'Glossary',
    components: {
      VCardWord
    },
    data(){
      return {
        searchValue: '',
        glossary: dataLocal
      }
    },
    computed: {
      wordList() {
        if(this.searchValue.trim().length > 0){
          return this.glossary.filter((word) => word.name.toLowerCase().includes(this.searchValue.trim()))
        }
        return this.glossary
      }
    }
}
</script>

<style lang="scss" scoped>

h3{
  color: var(--dark);
}
</style>