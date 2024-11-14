<script setup lang="ts">
const { t } = useI18n()

const PROJECTS_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    title: t('projects.items.grocero.title'),
    subtitle: t('projects.items.grocero.subtitle'),
    logoSrc: '/img/grocero-logo.png',
    imgSrc: '/img/grocero-project.jpg',
    description: t('projects.items.grocero.description'),
    buttonLabel: t('projects.items.grocero.buttonLabel'),
  },
])
</script>

<template>
  <div class="container">
    <section
      :id="$t('links.projects').split('#')[1]"
      class="text-center"
    >
      <h2 class="pt-20 text-3xl font-bold">{{ $t('lastProject.title') }}</h2>
      <p class="mt-7 text-typography-gray">{{ $t('lastProject.subtitle') }}</p>
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
