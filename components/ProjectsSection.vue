<script setup lang="ts">
const { t } = useI18n()

const PROJECTS_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    title: t('projects.items.grocero.title'),
    subtitle: t('projects.items.grocero.subtitle'),
    logoSrc: '/img/grocero-logo.png',
    imgSrc: '/img/food-planner-project.png',
    description: t('projects.items.grocero.description'),
    buttonLabel: t('projects.items.grocero.buttonLabel'),
  },
  {
    id: 2,
    title: t('projects.items.foodPlanner.title'),
    subtitle: t('projects.items.foodPlanner.subtitle'),
    logoSrc: '/img/food-planner-logo.svg',
    imgSrc: '/img/food-planner-project.png',
    description: t('projects.items.foodPlanner.description'),
    buttonLabel: t('projects.items.foodPlanner.buttonLabel'),
  },
  {
    id: 3,
    title: t('projects.items.shapeOfEmotions.title'),
    subtitle: t('projects.items.shapeOfEmotions.subtitle'),
    logoSrc: '/img/shape-of-emotions-logo.svg',
    imgSrc: '/img/shape-of-emotions-project.png',
    description: t('projects.items.shapeOfEmotions.description'),
    buttonLabel: t('projects.items.shapeOfEmotions.buttonLabel'),
  },
])
</script>

<template>
  <div
    :id="$t('links.projects').split('#')[1]"
    class="container"
  >
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('projects.title') }}</h2>
      <p class="mt-7 text-typography-gray">{{ $t('projects.subtitle') }}</p>
    </section>
    <div>
      <ProjectSectionItem
        v-for="(project, index) in PROJECTS_SECTION_ITEMS"
        :key="project.id"
        :description="project.description"
        :img-src="project.imgSrc"
        :is-even="(index + 1) % 2 === 0"
        :logo-src="project.logoSrc"
        :subtitle="project.subtitle"
        :title="project.title"
        :button-label="project.buttonLabel"
      />
    </div>
  </div>
</template>
