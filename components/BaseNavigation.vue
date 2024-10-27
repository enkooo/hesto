<script setup lang="ts">
const { t } = useI18n()

const MENU_ITEMS = computed(() => [
  { text: t('menu.home'), path: t('links.home') },
  { text: t('menu.about'), path: t('links.about') },
  { text: t('menu.services'), path: t('links.services') },
  { text: t('menu.contact'), path: t('links.contact') },
])

const isOpen = ref(false)

function onToggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- TODO: maybe better option is use 3 grid columns -->
  <header
    class="sticky top-0 z-50 bg-white md:border-b md:border-gray-200 md:bg-background/75 md:backdrop-blur"
  >
    <nav class="container flex items-center justify-between py-5">
      <NuxtLinkLocale to="/">
        <NuxtImg
          src="/img/logo.svg"
          alt="Hesto Logo"
          width="116"
          height="38"
        />
      </NuxtLinkLocale>
      <div
        class="absolute left-[-100%] top-[70px] flex w-full items-center bg-transparent bg-white px-5 duration-500 md:static md:min-h-fit md:w-auto md:bg-transparent md:px-0"
        :class="{ 'left-[0%]': isOpen }"
      >
        <ul
          class="flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-4 md:py-0 lg:gap-12"
        >
          <li
            v-for="item in MENU_ITEMS"
            :key="item.text"
            class="first:text-typography"
          >
            <NuxtLinkLocale
              :to="item.path"
              class="py-2"
            >
              {{ item.text }}
            </NuxtLinkLocale>
          </li>
          <li class="block md:hidden">
            <NuxtLinkLocale to="/project-pricing">
              {{ $t('menu.project-pricing') }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-6 md:block">
        <div class="gap-1 md:flex md:items-center">
          <LangSwitcher />
          <NuxtLinkLocale
            to="/project-pricing"
            class="hidden md:block"
          >
            <Button
              size="lg"
              variant="secondary"
            >
              {{ $t('menu.project-pricing') }}
            </Button>
          </NuxtLinkLocale>
        </div>
        <div class="flex w-8 items-center md:hidden">
          <Icon
            v-show="!isOpen"
            class="cursor-pointer md:hidden"
            size="30"
            name="mdi:menu"
            @click="onToggleMenu"
          />

          <Icon
            v-show="isOpen"
            size="30"
            name="mdi:window-close"
            @click="onToggleMenu"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
