<script lang="ts" setup>
import InputSearch from '@/ui/InputSearch.vue'
</script>

<template>
  <nav class="flex items-center justify-between">
    <div class="flex items-center gap-x-5">
      <router-link to="/" class="text-xs">
        خانه
      </router-link>
      <router-link to="/" class="text-xs">
        واچ لیست
      </router-link>
      <router-link to="/" class="text-xs">
        توسعه دهندگان
      </router-link>
      <router-link to="/" class="text-xs">
        درباره ما
      </router-link>
    </div>
    <InputSearch />
    <img src="/logo-free-movie.png" alt="free-movie" class="w-[78px] h-[29px] object-cover">
  </nav>
</template>
