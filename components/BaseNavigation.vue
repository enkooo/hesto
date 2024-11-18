<script setup lang="ts">
const { t } = useI18n()

const MENU_ITEMS = computed(() => [
  { text: t('menu.home'), path: t('links.home') },
  { text: t('menu.offer'), path: t('links.offer') },
  { text: t('menu.projects'), path: t('links.projects') },
  { text: t('menu.contact'), path: t('links.contact') },
])

const isOpen = ref(false)

function onToggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b bg-white md:border-gray-200 md:bg-background/75 md:backdrop-blur"
  >
    <nav class="container flex items-center justify-between py-5">
      <NuxtLinkLocale to="/">
        <NuxtImg
          src="/img/logo.svg"
          alt="Hesto Logo"
          width="116"
          height="38"
          densities="x1"
        />
      </NuxtLinkLocale>
      <div
        class="absolute left-[-100%] top-[70px] flex w-full items-center bg-transparent bg-white px-5 duration-500 md:static md:min-h-fit md:w-auto md:bg-transparent md:px-0"
        :class="{ 'left-[0%]': isOpen }"
      >
        <ul
          class="flex flex-col gap-8 py-12 text-sm md:flex-row md:items-center md:gap-4 md:py-0 lg:gap-12 lg:text-base"
        >
          <li
            v-for="item in MENU_ITEMS"
            :key="item.text"
            class="first:text-typography hover:underline"
          >
            <NuxtLinkLocale
              :to="item.path"
              class="py-2"
            >
              {{ item.text }}
            </NuxtLinkLocale>
          </li>
          <li class="block hover:underline md:hidden">
            <NuxtLinkLocale to="/kontakt?q=project">
              {{ $t('menu.project-pricing') }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-2 md:block">
        <div class="gap-1 md:flex md:items-center">
          <LangSwitcher />
          <NuxtLinkLocale
            to="/kontakt?q=project"
            class="hidden md:block"
          >
            <Button>
              {{ $t('menu.project-pricing') }}
            </Button>
          </NuxtLinkLocale>
        </div>
        <div class="flex items-center md:hidden">
          <Button variant="ghost">
            <Icon
              class="cursor-pointer md:hidden"
              size="30"
              :name="!isOpen ? 'mdi:menu' : 'mdi:close'"
              @click="onToggleMenu"
            />
          </Button>
        </div>
      </div>
    </nav>
  </header>
</template>
