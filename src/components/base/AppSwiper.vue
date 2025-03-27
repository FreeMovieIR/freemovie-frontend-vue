<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>

<template>
  <div class="slider-container">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="20"
      :autoplay="{ delay: 5000 }"
      :loop="true"
      :pagination="{ el: '.swiper-custom-pagination', clickable: true }"
      :navigation="{ nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' }"
      class="mySwiper"
    >
      <slot />
    </Swiper>
    <div class="flex items-center justify-end my-4">
      <div class="pagination-container flex items-center justify-center">
      <div class="swiper-custom-prev cursor-pointer text-[#E2E8F0]">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.01396 4.21367L3.71808 6.50955C3.69675 6.53088 3.67142 6.5478 3.64355 6.55934C3.61568 6.57089 3.58581 6.57683 3.55564 6.57683C3.52548 6.57683 3.49561 6.57089 3.46774 6.55934C3.43986 6.5478 3.41454 6.53088 3.39321 6.50955C3.37188 6.48822 3.35496 6.46289 3.34341 6.43502C3.33187 6.40715 3.32593 6.37728 3.32593 6.34711C3.32593 6.31695 3.33187 6.28708 3.34341 6.25921C3.35496 6.23133 3.37188 6.20601 3.39321 6.18468L5.52695 4.05123L3.39321 1.91778C3.35013 1.8747 3.32593 1.81627 3.32593 1.75535C3.32593 1.69443 3.35013 1.636 3.39321 1.59292C3.43629 1.54984 3.49472 1.52563 3.55564 1.52563C3.61657 1.52563 3.675 1.54984 3.71808 1.59292L6.01396 3.8888C6.03531 3.91012 6.05224 3.93544 6.06379 3.96331C6.07535 3.99119 6.08129 4.02106 6.08129 4.05123C6.08129 4.0814 6.07535 4.11128 6.06379 4.13915C6.05224 4.16702 6.03531 4.19234 6.01396 4.21367Z" fill="#E2E8F0" />
        </svg>
      </div>
      <div class="swiper-custom-pagination px-5" />
      <div class="swiper-custom-next cursor-pointer">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.69944 6.18468C5.72077 6.20601 5.73769 6.23133 5.74923 6.25921C5.76078 6.28708 5.76672 6.31695 5.76672 6.34711C5.76672 6.37728 5.76078 6.40715 5.74923 6.43502C5.73769 6.46289 5.72077 6.48822 5.69944 6.50955C5.67811 6.53088 5.65278 6.5478 5.62491 6.55934C5.59704 6.57089 5.56717 6.57683 5.537 6.57683C5.50684 6.57683 5.47696 6.57089 5.44909 6.55934C5.42122 6.5478 5.3959 6.53088 5.37457 6.50955L3.07869 4.21367C3.05734 4.19234 3.04041 4.16702 3.02885 4.13915C3.0173 4.11128 3.01135 4.0814 3.01135 4.05123C3.01135 4.02106 3.0173 3.99119 3.02885 3.96331C3.04041 3.93544 3.05734 3.91012 3.07869 3.8888L5.37457 1.59292C5.41765 1.54984 5.47608 1.52563 5.537 1.52563C5.59793 1.52563 5.65636 1.54984 5.69944 1.59292C5.74252 1.636 5.76672 1.69443 5.76672 1.75535C5.76672 1.81627 5.74252 1.8747 5.69944 1.91778L3.5657 4.05123L5.69944 6.18468Z" fill="#E2E8F0" />
        </svg>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
.slider-container {
  position: relative;
  width: 100%;
}

.swiper {
  width: 100%;
  height: 446px;
}

.swiper-custom-pagination {
  width: auto;
  position: static;
  display: flex;
  gap: 8px;
}

.swiper-custom-pagination .swiper-pagination-bullet {
  all: unset;
  background: #1D293D !important;
  width: 5px !important;
  height: 5px !important;
  margin: 0 5px !important;
  border-radius: 50% !important;
  transition: background 0.3s !important;
}

.swiper-custom-pagination .swiper-pagination-bullet-active {
  background: #90a1b9 !important;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: #E2E8F0;
  width: 7px !important;
  height: 7px !important;
  border-radius: 50%;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 18px !important;
}
</style>
