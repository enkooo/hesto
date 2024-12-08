<script setup lang="ts">
defineProps<{
  imgSrc: string
  title: string
  subtitle: string
  logoSrc: string
  isEven: boolean
  description: string
  buttonLabel: string
}>()
</script>

<template>
  <div class="mt-20 flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-14">
    <div
      class="flex items-center justify-center"
      :class="{ 'md:order-1': isEven }"
    >
      <NuxtImg
        :src="imgSrc"
        :alt="title"
        class="w-full rounded-xl drop-shadow-sm"
        format="webp"
        width="640"
        height="388"
        densities="x1"
        sizes="320px xs:440px sm:640px md:320px lg:453px xl:580px 2xl:640px"
      />
    </div>
    <div class="flex flex-col gap-8">
      <div class="flex items-center gap-3">
        <div
          class="flex size-[70px] shrink-0 items-center justify-center rounded-xl bg-white to-primary drop-shadow-md"
        >
          <NuxtImg
            :src="logoSrc"
            alt=""
            width="50"
            height="50"
            densities="x1"
          />
        </div>
        <div>
          <h3 class="text-xl font-bold">{{ title }}</h3>
          <p class="text-sm font-semibold text-typography-gray">{{ subtitle }}</p>
        </div>
      </div>
      <p class="text-typography-gray">{{ description }}</p>
    </div>
  </div>
</template>
