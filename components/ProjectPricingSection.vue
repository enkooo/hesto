<script setup lang="ts"></script>

<template>
  <div class="container">
    <div
      class="relative z-10 mt-20 flex min-h-[300px] flex-col gap-6 overflow-hidden rounded-xl bg-services-dark-gradient px-10 py-24 text-center text-typography-white"
    >
      <h2 class="text-4xl font-bold md:text-5xl">
        {{ $t('projectPricing.heading.part1') }}
        <span class="text-primary"> {{ $t('projectPricing.heading.highlight') }} </span
        >{{ $t('projectPricing.heading.part2') }}
      </h2>
      <p class="mx-auto max-w-5xl text-typography-light">{{ $t('projectPricing.shortText') }}</p>
      <NuxtLinkLocale
        to="/kontakt?q=project"
        class="hidden md:block"
      >
        <Button class="self-center">
          {{ $t('projectPricing.buttonLabel') }}
        </Button>
      </NuxtLinkLocale>
      <BaseBubble
        :width="900"
        :height="900"
        class="absolute -bottom-[500px] -left-[500px] -z-10 opacity-70"
      />
      <BaseBubble
        :width="900"
        :height="900"
        class="absolute -right-[500px] -top-[500px] -z-10 hidden opacity-70 md:block"
      />
    </div>
  </div>
</template>
