<script setup lang="ts">
interface Avatar {
  src: string
  alt?: string
}

defineProps<{
  avatars: Avatar[]
}>()
</script>

<template>
  <div class="flex items-center -space-x-1.5 rtl:space-x-reverse">
    <template v-for="(avatar, index) in avatars" :key="index">
      <img
        :src="avatar.src"
        :alt="avatar.alt || 'User avatar'"
        loading="lazy"
        class="size-[34px] rounded-full relative hover:z-50 border border-[#314158] transition-transform hover:scale-110"
        :style="{ zIndex: index + 1 }"
      >
    </template>
  </div>
</template>
