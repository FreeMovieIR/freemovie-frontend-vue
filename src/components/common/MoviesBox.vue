<script setup lang="ts">
import AppMovieCard from '../base/AppMovieCard.vue'
import AppRow from '../base/AppRow.vue'
</script>

<template>
  <section class="my-5">
    <AppRow link-text="مشاهده همه" title="جدیدترین فیلم‌ها" path="/" />
    <div class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-7 my-5">
      <AppMovieCard image-url="/images/pic-2.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-3.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-4.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-5.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-6.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-7.jpg" name="Riff Raff 2024" year="2024" duration="166" />
    </div>
    <AppRow link-text="مشاهده همه" title="جدیدترین سریال ها" path="/" />
    <div class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-7 my-5">
      <AppMovieCard image-url="/images/pic-2.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-3.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-4.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-5.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-6.jpg" name="Riff Raff 2024" year="2024" duration="166" />
      <AppMovieCard image-url="/images/pic-7.jpg" name="Riff Raff 2024" year="2024" duration="166" />
    </div>
  </section>
</template>
