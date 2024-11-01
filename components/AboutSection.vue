<script setup lang="ts">
const { t } = useI18n()

const FEATURE_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    title: t('about.values.experience.title'),
    description: t('about.values.experience.description'),
  },
  {
    id: 2,
    title: t('about.values.teamwork.title'),
    description: t('about.values.teamwork.description'),
  },
  {
    id: 3,
    title: t('about.values.clientUnderstanding.title'),
    description: t('about.values.clientUnderstanding.description'),
  },
  {
    id: 4,
    title: t('about.values.businessIt.title'),
    description: t('about.values.businessIt.description'),
  },
])

const BENEFIT_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    title: t('whyChooseUs.values.security.title'),
    description: t('whyChooseUs.values.security.description'),
    iconUrl: '/img/security-icon.svg',
  },
  {
    id: 2,
    title: t('whyChooseUs.values.speed.title'),
    description: t('whyChooseUs.values.speed.description'),
    iconUrl: '/img/speed-icon.svg',
  },
  {
    id: 3,
    title: t('whyChooseUs.values.reliability.title'),
    description: t('whyChooseUs.values.reliability.description'),
    iconUrl: '/img/reliability-icon.svg',
  },
  {
    id: 4,
    title: t('whyChooseUs.values.flexibility.title'),
    description: t('whyChooseUs.values.flexibility.description'),
    iconUrl: '/img/flexibility-icon.svg',
  },
])
</script>

<template>
  <div class="relative z-10 -mt-10 rounded-3xl bg-white py-16 text-center shadow-2xl md:text-left">
    <div class="container flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-10">
      <h2 class="text-center text-4xl font-bold md:col-start-1 md:col-end-3">
        {{ $t('about.heading') }}
      </h2>
      <h3 class="text-3xl font-bold text-black">
        <span class="text-primary">
          {{ $t('about.companyName') }}
        </span>
        <br class="md:hidden" />
        <span class="hidden md:inline"> - </span>
        {{ $t('about.companyWhoAreWe') }}
      </h3>
      <div class="flex flex-col gap-6 text-typography-gray md:col-start-2 md:row-span-2">
        <p>
          <span class="text-black"> {{ $t('about.companyName') }} </span>&nbsp;
          {{ $t('about.shortText') }}
        </p>
        <p>{{ $t('about.description') }}</p>
        <p>{{ $t('about.communication') }}</p>
      </div>
      <AboutImages class="xl:row-span-2" />
      <div
        class="flex flex-col gap-8 md:col-start-1 md:col-end-3 md:row-start-4 md:grid md:grid-cols-2 md:grid-rows-2 xl:col-start-2 xl:row-start-4"
      >
        <AboutFeatureCard
          v-for="feature in FEATURE_SECTION_ITEMS"
          :key="feature.id"
          icon="mdi:check-circle-outline"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
    <div class="container mt-28 text-center">
      <h3
        class="text-3xl font-bold text-black"
        v-html="$t('whyChooseUs.heading')"
      />
      <p class="mt-7 text-typography-gray md:px-16">{{ $t('whyChooseUs.description') }}</p>
      <div
        class="mt-14 flex flex-col place-items-center items-center justify-center gap-10 px-5 sm:grid sm:grid-cols-2 sm:gap-10 md:px-32 lg:grid-cols-4 lg:px-0"
      >
        <AboutBenefitCard
          v-for="benefit in BENEFIT_SECTION_ITEMS"
          :key="benefit.id"
          :icon-url="benefit.iconUrl"
          :title="benefit.title"
          :description="benefit.description"
        />
      </div>
    </div>
  </div>
</template>
