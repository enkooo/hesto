<script setup lang="ts">
const onScrollDown = () => {
  window.scrollTo({
    top: window.innerHeight - 80,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="relative overflow-hidden bg-cover">
    <section class="relative h-[calc(100dvh-40px)] w-full overflow-hidden bg-white">
      <svg
        class="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="teal-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stop-color="rgba(17,127,118,0.1)"
            />
            <stop
              offset="100%"
              stop-color="rgba(17,127,118,0.05)"
            />
          </linearGradient>
        </defs>
        <path
          class="animate-wave-slow"
          d="M0,1000 C200,800 350,900 500,800 C650,700 700,600 1000,600 L1000,1000 Z"
          fill="url(#teal-gradient)"
        />
        <path
          class="animate-wave-fast"
          d="M0,1000 C150,900 300,1000 500,900 C700,800 800,900 1000,800 L1000,1000 Z"
          fill="rgba(17,127,118,0.07)"
        />
      </svg>

      <div
        class="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-12 px-4 text-center"
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
    </section>
  </div>
</template>

<style scoped>
@keyframes wave-slow {
  0%,
  100% {
    d: path('M0,1000 C200,800 350,900 500,800 C650,700 700,600 1000,600 L1000,1000 Z');
  }
  50% {
    d: path('M0,1000 C300,900 400,800 500,900 C600,1000 800,900 1000,800 L1000,1000 Z');
  }
}

@keyframes wave-fast {
  0%,
  100% {
    d: path('M0,1000 C150,900 300,1000 500,900 C700,800 800,900 1000,800 L1000,1000 Z');
  }
  50% {
    d: path('M0,1000 C250,950 350,850 500,950 C650,1050 750,950 1000,900 L1000,1000 Z');
  }
}

.animate-wave-slow {
  animation: wave-slow 20s infinite alternate;
}

.animate-wave-fast {
  animation: wave-fast 15s infinite alternate;
}
</style>
