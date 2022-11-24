<template>
  <swiper 
  class="default-slider"
    parallax 
    grabCursor    
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
    :autoplay=true
    :pagination="{ clickable: true, el: '.swiper-pagination', type: 'custom', bulletElement: 'span', bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide v-for="image in images" :key="image.id">
        <img :src="image.imageUrl" class="img"/>
    </swiper-slide>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination">
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
    </div>


  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
SwiperCore.use([Navigation, Parallax, Autoplay]);

  export default {
    data(){
        return {
            parallaxSwiperWidth: 0,
            images: [
                {
                    id: 1,
                    imageUrl: require('../assets/alumno1.jpg')
                },
                {
                    id: 2,
                    imageUrl: require('../assets/alumno2.jpg')
                },
                {
                    id: 3,
                    imageUrl: require('../assets/alumno3.jpg')
                },
                {
                    id: 4,
                    imageUrl: require('../assets/alumno4.jpg')
                },
                {
                    id: 5,
                    imageUrl: require('../assets/alumno4.jpg')
                }
            ],
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-bullet',
                type: 'bullets',
            },       
        }

    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<style lang="scss" scoped>
.img{
    max-width: 100%;
    max-height: 100%;
}
.swiper-button-next, .swiper-button-prev{
    color: var(--light);
}

.swiper-pagination {
    // background-color: var(--light);
    color: red ;
}

.custom{
    background-color: #000;
    color: purple;
}
.swiper-pagination-bullet-active{
    color: brown;
    background-color: #000;
}
.default-slider 
.swiper-slide {
  padding-top: 3rem;
  display: flex;
  height: 300px !important;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: 700;
}

/*.swiper-slide:nth-child(1n) {
  background-color: palevioletred;
}.swiper-slide:nth-child(2n) {
  background-color: skyblue;
}.swiper-slide:nth-child(3n) {
  background-color: peru;
}.swiper-slide:nth-child(4n) {
  background-color: cadetblue;
}.swiper-slide:nth-child(5n) {
  background-color: plum;
}.swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}.swiper-slide:nth-child(7n) {
  background-color: palegreen;
}
*/
</style>