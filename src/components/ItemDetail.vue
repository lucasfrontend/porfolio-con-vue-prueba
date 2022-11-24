<template>
    <div>
        <h1>ItemDetail</h1>
        <button @click="showForm = true">Inscribir</button>
        <div
            v-if="showForm">
            <Contact />
            <button @click="showForm = false">Cancelar</button>
        </div>
    </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
name: 'ItemDetail',
data(){
    return {
        showForm: false
    }
},

components: {
    Contact
},
beforeMount () {
  }
}
</script>