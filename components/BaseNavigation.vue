<script setup lang="ts">
const { t } = useI18n()

const MENU_ITEMS = computed(() => [
  { text: t('menu.home'), ssrLink: true, path: t('links.home') },
  { text: t('menu.about'), ssrLink: true, path: t('links.about') },
  { text: t('menu.services'), ssrLink: true, path: t('links.services') },
  { text: t('menu.contact'), ssrLink: true, path: t('links.contact') },
])
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="item in MENU_ITEMS"
        :key="item.text"
      >
        <NuxtLinkLocale :to="item.path">{{ item.text }}</NuxtLinkLocale>
      </li>
    </ul>
  </nav>
  <LocaleSelector />
  <NuxtLinkLocale to="/project-pricing">{{ $t('menu.project-pricing') }}</NuxtLinkLocale>
</template>
