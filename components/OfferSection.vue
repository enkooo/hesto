<script setup lang="ts">
const { t } = useI18n()

const OFFER_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    iconUrl: '/img/mvp-offer-icon.svg',
    title: t('offer.items.mvp.title'),
    description: t('offer.items.mvp.description'),
    benefits: [
      t('offer.items.mvp.benefits.0'),
      t('offer.items.mvp.benefits.1'),
      t('offer.items.mvp.benefits.2'),
      t('offer.items.mvp.benefits.3'),
    ],
    summary: t('offer.items.mvp.summary'),
  },
  {
    id: 2,
    iconUrl: '/img/custom-offer-icon.svg',
    title: t('offer.items.custom.title'),
    description: t('offer.items.custom.description'),
    benefits: [
      t('offer.items.custom.benefits.0'),
      t('offer.items.custom.benefits.1'),
      t('offer.items.custom.benefits.2'),
      t('offer.items.custom.benefits.3'),
    ],
    summary: t('offer.items.custom.summary'),
  },
  {
    id: 3,
    iconUrl: '/img/digitalization-offer-icon.svg',
    title: t('offer.items.digitalization.title'),
    description: t('offer.items.digitalization.description'),
    benefits: [
      t('offer.items.digitalization.benefits.0'),
      t('offer.items.digitalization.benefits.1'),
      t('offer.items.digitalization.benefits.2'),
      t('offer.items.digitalization.benefits.3'),
    ],
    summary: t('offer.items.digitalization.summary'),
  },
])
</script>

<template>
  <div class="bg-services-dark-gradient -mt-10 min-h-screen pt-10 text-white">
    <div class="container flex flex-col gap-6 py-20">
      <h2 class="text-4xl font-bold">{{ $t('offer.title') }}</h2>
      <p class="text-typography-light">{{ $t('offer.subtitle') }}</p>
      <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <div
          v-for="offer in OFFER_SECTION_ITEMS"
          :key="offer.id"
        >
          <div
            class="h-full w-full rounded-xl bg-gradient-to-tr from-[#6276a052] via-[#151A26] to-[#008B84] p-[1px]"
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
                    :src="offer.iconUrl"
                    alt=""
                    width="40"
                    height="40"
                  />
                </div>
                <h3 class="text-balance text-2xl font-bold text-white">{{ offer.title }}</h3>
                <p>{{ offer.description }}</p>
                <div>
                  <p class="text-white">{{ $t('offer.benefits') }}:</p>
                  <ul class="mt-2 list-disc pl-4">
                    <li
                      v-for="benefit in offer.benefits"
                      :key="benefit"
                    >
                      {{ benefit }}
                    </li>
                  </ul>
                </div>
                <p class="mb-10">{{ offer.summary }}</p>
                <Button class="mt-auto self-end">{{ $t('offer.learnMore') }}</Button>
                <div
                  class="absolute -bottom-20 -left-10 size-44 rotate-[70deg] rounded-xl border border-[#6276a052]"
                />
                <div class="absolute -top-[70%] -z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1062"
                    height="1088"
                    viewBox="0 0 1062 1088"
                    fill="none"
                  >
                    <g
                      opacity="0.7"
                      filter="url(#filter0_f_35_76)"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M536.885 861.896C498.97 854.095 461.406 846.351 426.14 830.393C391.766 814.838 363.758 789.672 332.059 769.211C295.92 745.884 248.601 735.678 224.359 700.147C200.341 664.944 200.837 618.347 200.058 575.739C199.302 534.388 205.953 493.275 219.864 454.327C233.422 416.367 251.763 379.208 280.387 350.829C308.133 323.321 348.204 314.008 381.694 293.885C414.814 273.984 442.903 247.019 478.432 231.829C517.664 215.056 558.621 199.789 601.288 200.002C645.876 200.225 693.131 207.604 729.723 233.083C766.263 258.525 782.188 303.796 805.145 341.947C826.604 377.609 857.473 410.732 861.543 452.154C865.62 493.652 839.659 531.53 827.697 571.475C817.4 605.861 811.783 641.315 795.34 673.222C778.993 704.944 750.387 727.752 731.543 758.056C707.047 797.45 707.743 858.079 666.814 879.912C627.904 900.669 580.08 870.783 536.885 861.896Z"
                        fill="url(#paint0_linear_35_76)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_35_76"
                        x="6.10352e-05"
                        y="3.05176e-05"
                        width="1061.97"
                        height="1087.1"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="100"
                          result="effect1_foregroundBlur_35_76"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_35_76"
                        x1="530.987"
                        y1="887.104"
                        x2="530.987"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#117F76" />
                        <stop
                          offset="1"
                          stop-color="#117F76"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dual-gradient-border {
  position: relative;
  z-index: 1;
}

.dual-gradient-border::before,
.dual-gradient-border::after {
  content: '';
  position: absolute;
  inset: 0; /* Cover the entire container */
  border-radius: inherit;
  pointer-events: none;
}

.dual-gradient-border::before {
  z-index: -2;
  padding: 2px; /* Adjust to control border width */
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 30%, transparent 100%);
}

.dual-gradient-border::after {
  z-index: -1;
  padding: 4px; /* Outer border */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), transparent);
}
</style>
