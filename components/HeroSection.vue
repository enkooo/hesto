<script setup lang="ts">
const onScrollDown = () => {
  window.scrollTo({
    top: window.innerHeight - 80,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="relative overflow-hidden bg-hero-pattern bg-cover">
    <div
      class="container flex h-[calc(100dvh-40px)] max-w-7xl flex-col items-center justify-center gap-12 md:text-center"
    >
      <h1 class="-mt-10 text-5xl font-bold lg:text-[4rem]">
        {{ $t('hero.title.start') }}
        <span class="text-primary">{{ $t('hero.title.highlight') }}</span>
        {{ $t('hero.title.end') }}
      </h1>
      <p class="text-balance text-typography-gray md:px-16">
        {{ $t('hero.description') }}
      </p>
      <div class="flex w-full items-center justify-center gap-4">
        <NuxtLinkLocale
          :to="$t('links.offer')"
          class="flex-1 sm:max-w-52"
        >
          <Button
            variant="secondary"
            size="lg"
            class="w-full"
          >
            {{ $t('hero.buttons.offer') }}
          </Button>
        </NuxtLinkLocale>
        <NuxtLinkLocale
          :to="$t('links.projects')"
          class="flex-1 sm:max-w-52"
        >
          <Button
            size="lg"
            class="w-full"
          >
            {{ $t('hero.buttons.projects') }}
          </Button>
        </NuxtLinkLocale>
      </div>
      <Button
        variant="ghost"
        class="absolute bottom-14 left-1/2 -translate-x-1/2 md:bottom-20"
        @click="onScrollDown"
      >
        <NuxtImg
          src="/img/arrows-down.svg"
          alt=""
          width="12"
          height="12"
        />
      </Button>
    </div>
    <NuxtImg
      src="/img/bacground-bubble.svg"
      alt=""
      class="absolute -bottom-1/2 -left-1/2 -z-10 size-full"
    />
    <NuxtImg
      src="/img/bacground-bubble.svg"
      alt=""
      class="absolute -right-1/3 -top-1/3 -z-10 size-full"
    />
  </div>
</template>
