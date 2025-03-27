<script setup lang="ts">
import { formatDuration } from '@/utils/formatDuration'
import { SwiperSlide } from 'swiper/vue'
import OverlappingAvatars from './OverlappingAvatars.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AppSwiper from '../base/AppSwiper.vue'

interface Movie {
  id?: number
  title: string
  coverImage: string
  rating: string
  duration: string
  ageRating: string
  year: string
  genres: string[]
  description: string
}

const props = defineProps<{
  movies: Movie[] | Movie
  avatars?: Array<{ src: string, alt: string }>
}>()

const defaultAvatars = [
  { src: '/images/avatar-1.jpg', alt: 'User 1' },
  { src: '/images/avatar-1.jpg', alt: 'User 2' },
  { src: '/images/avatar-1.jpg', alt: 'User 3' },
  { src: '/images/avatar-1.jpg', alt: 'User 4' },
  { src: '/images/avatar-1.jpg', alt: 'User 5' },
]

const movieAvatars = props.avatars || defaultAvatars
const moviesArray = Array.isArray(props.movies) ? props.movies : [props.movies]
</script>

<template>
  <AppSwiper>
    <SwiperSlide v-for="movie in moviesArray" :key="movie.id || Math.random()">
      <div
        :style="{ backgroundImage: `url(${movie.coverImage})` }"
        class="bg-cover p-5 relative bg-center h-[446px] rounded-[.9rem] w-full"
      >
        <div class="absolute inset-0 bg-black/50" />
        <div class="absolute bottom-4 right-4 space-y-4">
          <h2 class="text-3xl text-white">
            {{ movie.title }}
          </h2>
          <div class="flex items-center text-white mt-1 w-[250px] justify-between">
            <div class="flex items-center gap-x-2 text-sm">
              <span>{{ movie.rating }}/10</span>
              <img src="/imdb.png" alt="imdb" class="w-[24px] h-3">
            </div>
            <div class="size-[5px] rounded-full bg-[#D9D9D9]" />
            <p class="text-sm">
              {{ formatDuration(movie.duration) }}
            </p>
            <div class="size-[5px] rounded-full bg-[#D9D9D9]" />
            <button class="flex items-center justify-center bg-[#1D293D] text-xs text-white px-3 py-1 rounded-full">
              {{ movie.ageRating }}
            </button>
            <div class="size-[5px] rounded-full bg-[#D9D9D9]" />
            <h6 class="text-sm">
              {{ movie.year }}
            </h6>
          </div>
          <div class="flex items-center gap-x-3">
            <button
              v-for="(genre, index) in movie.genres"
              :key="index"
              class="flex items-center justify-center bg-[#1D293D] text-xs text-white px-3 py-1 rounded-full"
            >
              {{ genre }}
            </button>
          </div>

          <OverlappingAvatars :avatars="movieAvatars" />
          <p class="text-sm text-[#CAD5E2] tracking-wide w-[500px] text-wrap">
            {{ movie.description }}
          </p>

          <div class="flex items-center gap-x-3">
            <button class="bg-[#BEDBFF] flex items-center gap-x-1 justify-center p-2 rounded-full text-[#020618] text-xs">
              <span>دانلود</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6062 8.64411V12.3175C13.6062 12.4393 13.5578 12.5561 13.4717 12.6422C13.3856 12.7283 13.2688 12.7767 13.147 12.7767H3.04511C2.92333 12.7767 2.80654 12.7283 2.72043 12.6422C2.63431 12.5561 2.58594 12.4393 2.58594 12.3175L2.58594 8.64411C2.58594 8.52233 2.63431 8.40554 2.72043 8.31943C2.80654 8.23331 2.92333 8.18494 3.04511 8.18494C3.16689 8.18494 3.28369 8.23331 3.3698 8.31943C3.45591 8.40554 3.50429 8.52233 3.50429 8.64411L3.50429 11.8583H12.6878V8.64411C12.6878 8.52233 12.7362 8.40554 12.8223 8.31943C12.9084 8.23331 13.0252 8.18494 13.147 8.18494C13.2688 8.18494 13.3856 8.23331 13.4717 8.31943C13.5578 8.40554 13.6062 8.52233 13.6062 8.64411ZM7.77119 8.96898C7.81383 9.01167 7.86447 9.04554 7.92022 9.06865C7.97596 9.09176 8.03571 9.10365 8.09605 9.10365C8.1564 9.10365 8.21615 9.09176 8.27189 9.06865C8.32763 9.04554 8.37828 9.01167 8.42092 8.96898L10.7168 6.6731C10.7595 6.63044 10.7933 6.57979 10.8164 6.52405C10.8395 6.46831 10.8514 6.40857 10.8514 6.34823C10.8514 6.2879 10.8395 6.22816 10.8164 6.17242C10.7933 6.11667 10.7595 6.06603 10.7168 6.02337C10.6741 5.9807 10.6235 5.94686 10.5678 5.92377C10.512 5.90068 10.4523 5.8888 10.3919 5.8888C10.3316 5.8888 10.2719 5.90068 10.2161 5.92377C10.1604 5.94686 10.1097 5.9807 10.0671 6.02337L8.55523 7.53578V2.21565C8.55523 2.09386 8.50685 1.97707 8.42074 1.89096C8.33463 1.80485 8.21783 1.75647 8.09605 1.75647C7.97427 1.75647 7.85748 1.80485 7.77137 1.89096C7.68525 1.97707 7.63688 2.09386 7.63688 2.21565V7.53578L6.12504 6.02337C6.03888 5.93721 5.92202 5.8888 5.80017 5.8888C5.67832 5.8888 5.56146 5.93721 5.4753 6.02337C5.38914 6.10953 5.34074 6.22638 5.34074 6.34823C5.34074 6.47008 5.38914 6.58694 5.4753 6.6731L7.77119 8.96898Z" fill="#020618" />
              </svg>
            </button>
            <button class="bg-[#193CB8] p-2 flex items-center justify-center gap-x-1 rounded-full text-xs text-[#BEDBFF]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.91302 1.75647C6.73241 1.75647 5.5783 2.10656 4.59666 2.76248C3.61501 3.41839 2.84992 4.35067 2.39811 5.44141C1.94631 6.53216 1.8281 7.73238 2.05843 8.89031C2.28875 10.0482 2.85727 11.1119 3.69209 11.9467C4.52691 12.7815 5.59054 13.35 6.74847 13.5804C7.9064 13.8107 9.10662 13.6925 10.1974 13.2407C11.2881 12.7889 12.2204 12.0238 12.8763 11.0421C13.5322 10.0605 13.8823 8.90638 13.8823 7.72576C13.8806 6.14312 13.2512 4.62578 12.1321 3.50668C11.013 2.38758 9.49566 1.75814 7.91302 1.75647ZM7.91302 12.7767C6.91404 12.7767 5.93749 12.4805 5.10687 11.9255C4.27625 11.3705 3.62885 10.5816 3.24656 9.65867C2.86427 8.73573 2.76424 7.72016 2.95913 6.74037C3.15402 5.76059 3.63508 4.86059 4.34147 4.15421C5.04785 3.44782 5.94784 2.96677 6.92763 2.77187C7.90742 2.57698 8.92299 2.67701 9.84593 3.0593C10.7689 3.4416 11.5577 4.08899 12.1127 4.91961C12.6677 5.75023 12.964 6.72678 12.964 7.72576C12.9624 9.06489 12.4298 10.3487 11.4829 11.2956C10.536 12.2425 9.25215 12.7752 7.91302 12.7767ZM10.6681 7.72576C10.6681 7.84754 10.6197 7.96434 10.5336 8.05045C10.4475 8.13656 10.3307 8.18494 10.2089 8.18494H8.3722V10.0216C8.3722 10.1434 8.32382 10.2602 8.23771 10.3463C8.15159 10.4324 8.0348 10.4808 7.91302 10.4808C7.79124 10.4808 7.67445 10.4324 7.58833 10.3463C7.50222 10.2602 7.45384 10.1434 7.45384 10.0216V8.18494H5.61714C5.49536 8.18494 5.37856 8.13656 5.29245 8.05045C5.20634 7.96434 5.15796 7.84754 5.15796 7.72576C5.15796 7.60398 5.20634 7.48719 5.29245 7.40108C5.37856 7.31496 5.49536 7.26659 5.61714 7.26659H7.45384V5.42988C7.45384 5.3081 7.50222 5.19131 7.58833 5.10519C7.67445 5.01908 7.79124 4.9707 7.91302 4.9707C8.0348 4.9707 8.15159 5.01908 8.23771 5.10519C8.32382 5.19131 8.3722 5.3081 8.3722 5.42988V7.26659H10.2089C10.3307 7.26659 10.4475 7.31496 10.5336 7.40108C10.6197 7.48719 10.6681 7.60398 10.6681 7.72576Z" fill="#BEDBFF" />
              </svg>
              <span>واچ لیست</span>
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </AppSwiper>
</template>
