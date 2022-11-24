<template>
    <main class="bg">
      <Glossary />
    </main>
</template>
  
  <script>
import Glossary from '@/components/Glossary'

  export default {
    name: 'GlossaryView',
    components: {
      Glossary
    }
    
  
  }
  </script>
  
  <style lang="scss" scoped>

.bg{
  background-image: url('../assets/bg-2.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  min-height: 100vh;
  min-width: 80%;
  // background-image: url('https://res.cloudinary.com/codingsquirrel/image/upload/v1477942751/%D0%91%D0%B5%D0%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8_yumofp.jpg');
}
  </style>