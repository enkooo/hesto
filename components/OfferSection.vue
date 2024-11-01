<script setup lang="ts">
const { t } = useI18n()

const OFFER_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    iconUrl: '/img/mvp-offer-icon.svg',
    title: t('offer.items.mvp.title'),
    description: t('offer.items.mvp.description'),
    benefits: [
      t('offer.items.mvp.benefits.0'),
      t('offer.items.mvp.benefits.1'),
      t('offer.items.mvp.benefits.2'),
      t('offer.items.mvp.benefits.3'),
    ],
    summary: t('offer.items.mvp.summary'),
  },
  {
    id: 2,
    iconUrl: '/img/custom-offer-icon.svg',
    title: t('offer.items.custom.title'),
    description: t('offer.items.custom.description'),
    benefits: [
      t('offer.items.custom.benefits.0'),
      t('offer.items.custom.benefits.1'),
      t('offer.items.custom.benefits.2'),
      t('offer.items.custom.benefits.3'),
    ],
    summary: t('offer.items.custom.summary'),
  },
  {
    id: 3,
    iconUrl: '/img/digitalization-offer-icon.svg',
    title: t('offer.items.digitalization.title'),
    description: t('offer.items.digitalization.description'),
    benefits: [
      t('offer.items.digitalization.benefits.0'),
      t('offer.items.digitalization.benefits.1'),
      t('offer.items.digitalization.benefits.2'),
      t('offer.items.digitalization.benefits.3'),
    ],
    summary: t('offer.items.digitalization.summary'),
  },
])
</script>

<template>
  <div class="-mt-10 min-h-screen bg-services-dark-gradient py-10 text-white">
    <div class="container flex flex-col gap-6 py-20">
      <h2 class="text-4xl font-bold">{{ $t('offer.title') }}</h2>
      <p class="text-typography-light">{{ $t('offer.subtitle') }}</p>
      <div class="mt-14 grid justify-center gap-5 gap-y-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
        <OfferCard
          v-for="(offer, index) in OFFER_SECTION_ITEMS"
          :key="offer.id"
          :benefits="offer.benefits"
          :description="offer.description"
          :icon-url="offer.iconUrl"
          :summary="offer.summary"
          :title="offer.title"
          class="col-span-2"
          :class="{ 'md:col-start-2 lg:col-start-auto': index === OFFER_SECTION_ITEMS.length - 1 }"
        />
      </div>
    </div>
  </div>
</template>

<style>
.dual-gradient-border {
  position: relative;
  z-index: 1;
}

.dual-gradient-border::before,
.dual-gradient-border::after {
  content: '';
  position: absolute;
  inset: 0; /* Cover the entire container */
  border-radius: inherit;
  pointer-events: none;
}

.dual-gradient-border::before {
  z-index: -2;
  padding: 2px; /* Adjust to control border width */
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 30%, transparent 100%);
}

.dual-gradient-border::after {
  z-index: -1;
  padding: 4px; /* Outer border */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), transparent);
}
</style>
