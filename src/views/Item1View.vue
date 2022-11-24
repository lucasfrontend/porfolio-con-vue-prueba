<template>
    <main class="swiper-container">
      <div class="container pt-4">
        <h3>Titulo Slider</h3>
        <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam vitae eveniet quod omnis quidem dignissimos optio, illum quam officiis vel, voluptatem expedita consequuntur tempora voluptatum consectetur quaerat eaque. Voluptate.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam vitae eveniet quod omnis quidem dignissimos optio, illum quam officiis vel, voluptatem expedita consequuntur tempora voluptatum consectetur quaerat eaque. Voluptate.</p>
        <SwiperSlider class="pb-4"/>
        <p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam vitae eveniet quod omnis quidem dignissimos optio, illum quam officiis vel, voluptatem expedita consequuntur tempora voluptatum consectetur quaerat eaque. Voluptate.</p>
      </div>
    </main>
  </template>
  
  <script>
import SwiperSlider from '@/components/SwiperSlider.vue';

  export default {
    name: 'Item1',
    components: {
      SwiperSlider
    }
    
  
  }
  </script>
  
  <style lang="scss" scoped>
  .swiper-container{
    background-image: url('https://res.cloudinary.com/codingsquirrel/image/upload/v1477942751/%D0%91%D0%B5%D0%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8_yumofp.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    min-height: 100vh;
    min-width: 80%;
  }
  </style>