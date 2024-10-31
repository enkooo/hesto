<script setup lang="ts">
defineProps<{
  iconUrl: string
  title: string
  description: string
  benefits: string[]
  summary: string
}>()
</script>

<template>
  <div>
    <div
      class="h-full w-full max-w-[435px] rounded-xl bg-gradient-to-tr from-[#6276a052] via-[#151A26] to-[#008B84] p-[1px]"
    >
      <div
        class="bg-services-dark-gradient flex h-full w-full items-center justify-center rounded-xl"
      >
        <div
          class="relative z-10 flex h-full flex-col gap-8 overflow-hidden rounded-xl bg-gradient-to-b from-[#1e2534] to-[#101421] p-8 text-typography-light shadow-[0px_16px_25px_0px_rgba(0,0,0,0.06)]"
        >
          <div
            class="relative flex size-16 items-center justify-center rounded-xl bg-gradient-to-b from-[#68CEC9] to-primary shadow-lg"
          >
            <NuxtImg
              :src="iconUrl"
              alt=""
              width="40"
              height="40"
            />
          </div>
          <h3 class="text-balance text-2xl font-bold text-white">{{ title }}</h3>
          <p>{{ description }}</p>
          <div>
            <p class="text-white">{{ $t('offer.benefits') }}:</p>
            <ul class="mt-2 list-disc pl-4">
              <li
                v-for="benefit in benefits"
                :key="benefit"
              >
                {{ benefit }}
              </li>
            </ul>
          </div>
          <p class="mb-10">{{ summary }}</p>
          <Button class="mt-auto self-end">{{ $t('offer.learnMore') }}</Button>
          <div
            class="absolute -bottom-20 -left-10 size-44 rotate-[70deg] rounded-xl border border-[#6276a052]"
          />
          <div class="absolute -top-[70%] -z-10">
            <BaseBubble />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
