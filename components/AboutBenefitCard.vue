<script setup lang="ts">
defineProps<{
  iconUrl: string
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="flex h-[385px] max-w-[275px] flex-col items-center gap-6 rounded-xl p-5 pt-12 shadow-2xl lg:h-[370px]"
  >
    <div
      class="relative flex size-20 items-center justify-center rounded-xl bg-gradient-to-b from-[#68CEC9] to-primary shadow-lg"
    >
      <NuxtImg
        :src="iconUrl"
        alt=""
        width="50"
        height="50"
        densities="x1"
      />
      <div class="absolute top-[52px] h-10 w-28 rounded-xl backdrop-blur" />
    </div>
    <h4 class="font-bold">{{ title }}</h4>
    <p class="text-sm text-typography-gray">
      {{ description }}
    </p>
  </div>
</template>
