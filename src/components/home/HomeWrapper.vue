<script setup lang="ts">
import AlertNotice from '../common/AlertNotice.vue'
import Footer from '../common/Footer.vue'
import MoviesBox from '../common/MoviesBox.vue'
import Navbar from '../common/Navbar.vue'
import ThumbnailBox from '../common/ThumbnailBox.vue'

const moviesData = [
  {
    id: 1,
    title: 'I\'m Still Here',
    coverImage: '/pic-1.jpg',
    rating: '8.5',
    duration: '146',
    ageRating: '16+',
    year: '2024',
    genres: ['Drama', 'History', 'Biography'],
    description: 'داستان مادری که پس از فروپاشی خانواده‌اش در یک حادثه طی دیکتاتوری نظامی در سال 1971 و در برزیل، باید دوباره روی پای خودش بایستد تا...',
  },
  {
    id: 2,
    title: 'The Godfather',
    coverImage: '/pic-1.jpg',
    rating: '9.2',
    duration: '175',
    ageRating: '18+',
    year: '1972',
    genres: ['Crime', 'Drama'],
    description: 'داستان خانواده کورلئونه، یکی از قدرتمندترین خانواده‌های مافیایی آمریکا در دهه ۱۹۴۰...',
  },
  {
    id: 3,
    title: 'Interstellar',
    coverImage: '/pic-1.jpg',
    rating: '8.7',
    duration: '169',
    ageRating: '13+',
    year: '2014',
    genres: ['Adventure', 'Sci-Fi', 'Drama'],
    description: 'گروهی از فضانوردان از طریق یک کرم‌چاله به سفر بین ستاره‌ای می‌روند تا برای بشریت سیاره قابل سکونت جدیدی پیدا کنند...',
  },
]
</script>

<template>
  <Navbar />
  <AlertNotice />
  <ThumbnailBox :movies="moviesData" />
  <MoviesBox />
  <hr class="my-5 border-[#1D293D] border">
  <Footer />
</template>
