<script setup lang="ts">
const { t } = useI18n()

const SERVICES_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    title: t('services.items.grocero.title'),
    subtitle: t('services.items.grocero.subtitle'),
    logoSrc: '/img/grocero-logo.png',
    imgSrc: '/img/food-planner-service.png',
    description: t('services.items.grocero.description'),
    buttonLabel: t('services.items.grocero.buttonLabel'),
  },
  {
    id: 2,
    title: t('services.items.foodPlanner.title'),
    subtitle: t('services.items.foodPlanner.subtitle'),
    logoSrc: '/img/food-planner-logo.svg',
    imgSrc: '/img/food-planner-service.png',
    description: t('services.items.foodPlanner.description'),
    buttonLabel: t('services.items.foodPlanner.buttonLabel'),
  },
  {
    id: 3,
    title: t('services.items.shapeOfEmotions.title'),
    subtitle: t('services.items.shapeOfEmotions.subtitle'),
    logoSrc: '/img/shape-of-emotions-logo.svg',
    imgSrc: '/img/shape-of-emotions-service.png',
    description: t('services.items.shapeOfEmotions.description'),
    buttonLabel: t('services.items.shapeOfEmotions.buttonLabel'),
  },
])
</script>

<template>
  <div class="-mt-10 min-h-screen rounded-3xl bg-white pt-16 shadow-2xl">
    <div class="container">
      <section class="text-center">
        <h2 class="text-3xl font-bold">{{ $t('services.title') }}</h2>
        <p class="mt-7 text-typography-gray">{{ $t('services.subtitle') }}</p>
      </section>
      <div>
        <ServicesProjectSection
          v-for="(service, index) in SERVICES_SECTION_ITEMS"
          :key="service.id"
          :description="service.description"
          :img-src="service.imgSrc"
          :is-even="(index + 1) % 2 === 0"
          :logo-src="service.logoSrc"
          :subtitle="service.subtitle"
          :title="service.title"
          :button-label="service.buttonLabel"
        />
      </div>
    </div>
  </div>
</template>
