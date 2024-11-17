<script setup lang="ts">
const { t } = useI18n()

const BENEFITS = computed(() => [
  {
    id: 1,
    title: t('whyWorkWithUs.items.quickImplementation.title'),
    description: t('whyWorkWithUs.items.quickImplementation.description'),
    icon: 'mdi:lightning-bolt-outline',
  },
  {
    id: 2,
    title: t('whyWorkWithUs.items.innovativeTechnologies.title'),
    description: t('whyWorkWithUs.items.innovativeTechnologies.description'),
    icon: 'mdi:rocket-launch-outline',
  },
  {
    id: 3,
    title: t('whyWorkWithUs.items.expertSupport.title'),
    description: t('whyWorkWithUs.items.expertSupport.description'),
    icon: 'mdi:users-outline',
  },
  {
    id: 4,
    title: t('whyWorkWithUs.items.scalability.title'),
    description: t('whyWorkWithUs.items.scalability.description'),
    icon: 'mdi:trending-up',
  },
  {
    id: 5,
    title: t('whyWorkWithUs.items.dataSecurity.title'),
    description: t('whyWorkWithUs.items.dataSecurity.description'),
    icon: 'mdi:shield-outline',
  },
  {
    id: 6,
    title: t('whyWorkWithUs.items.qualityAssurance.title'),
    description: t('whyWorkWithUs.items.qualityAssurance.description'),
    icon: 'mdi:check-circle-outline',
  },
])
</script>

<template>
  <div class="container">
    <section class="w-full bg-white pt-12 md:pt-24 lg:pt-32">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {{ $t('whyWorkWithUs.title') }}
        </h2>
        <p class="mt-4 text-typography-gray md:text-lg">
          {{ $t('whyWorkWithUs.subtitle') }}
        </p>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BenefitCard
          v-for="benefit in BENEFITS"
          :key="benefit.id"
          :title="benefit.title"
          :description="benefit.description"
          :icon="benefit.icon"
        />
      </div>
    </section>
  </div>
</template>
