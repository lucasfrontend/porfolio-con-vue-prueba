<template>
    <div>

      <h3>Detalle </h3>
      <ItemDetail />
    </div>
</template>
  
<script>
import ItemDetail from '@/components/ItemDetail.vue'

  export default {
    name: "ItemDetailView",
    components: {
      ItemDetail
    }

  };
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
  