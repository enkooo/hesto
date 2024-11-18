<script setup lang="ts"></script>

<template>
  <div class="mx-auto grid size-80 grid-cols-7 grid-rows-7 gap-4 xl:size-[37rem]">
    <div
      class="col-start-1 col-end-4 row-start-1 row-end-4 overflow-hidden rounded-md bg-gray-300 drop-shadow-2xl"
    >
      <NuxtImg
        src="/img/about-image-1.webp"
        alt=""
        class="h-full w-full object-cover"
        densities="x1"
        sizes="128px xl:245px"
      />
    </div>
    <div
      class="col-start-2 col-end-4 row-start-4 row-end-6 overflow-hidden rounded-md bg-gray-300 drop-shadow-2xl"
    >
      <NuxtImg
        src="/img/about-image-2.webp"
        alt=""
        class="h-full w-full object-cover"
        densities="x1"
        sizes="80px xl:158px"
      />
    </div>
    <div
      class="col-start-4 col-end-8 row-start-2 row-end-8 overflow-hidden rounded-md bg-gray-300 drop-shadow-2xl"
    >
      <NuxtImg
        src="/img/about-image-3.webp"
        alt=""
        class="h-full w-full object-cover"
        densities="x1"
        sizes="176px xl:332px"
      />
    </div>
  </div>
</template>
