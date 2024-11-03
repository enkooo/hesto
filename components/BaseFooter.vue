<script setup lang="ts"></script>

<template>
  <div
    class="relative z-10 -mt-10 overflow-hidden bg-services-dark-gradient py-10 pt-20 text-white"
  >
    <div class="container text-typography-light md:grid md:grid-cols-3 md:items-center md:gap-2">
      <div class="flex justify-center text-xs sm:px-10 md:px-0">
        <div class="flex w-1/2 flex-col gap-3 md:w-full lg:flex-row lg:gap-3">
          <div class="flex flex-col gap-3 md:flex-row">
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.home.link')"
            >
              {{ $t('footer.navigation.home.text') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.about.link')"
            >
              {{ $t('footer.navigation.about.text') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.offer.link')"
            >
              {{ $t('footer.navigation.offer.text') }}
            </NuxtLinkLocale>
          </div>
          <div class="flex flex-col gap-3 md:flex-row">
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.projects.link')"
            >
              {{ $t('footer.navigation.projects.text') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.contact.link')"
            >
              {{ $t('footer.navigation.contact.text') }}
            </NuxtLinkLocale>
          </div>
        </div>
        <div class="flex w-1/2 flex-col gap-3 md:hidden">
          <p>{{ $t('footer.companyDetails.name') }}</p>
          <p>{{ $t('footer.companyDetails.address') }}</p>
          <p>{{ $t('footer.companyDetails.phone') }}</p>
          <p>{{ $t('footer.companyDetails.email') }}</p>
        </div>
      </div>
      <div class="mt-10 text-center text-xs md:mt-0">
        <p>{{ $t('footer.copyright') }}</p>
        <p>{{ $t('footer.cookies') }}</p>
      </div>
      <div class="ml-auto hidden md:block">
        <div class="md:flex md:flex-col md:justify-end md:gap-3 md:text-xs lg:flex-row">
          <div>
            <p>{{ $t('footer.companyDetails.name') }}</p>
            <p>{{ $t('footer.companyDetails.address') }}</p>
          </div>
          <div>
            <p>
              <a
                class="hover:underline"
                :href="`tel:${$t('footer.companyDetails.phone.number')}`"
              >
                {{ $t('footer.companyDetails.phone.label') }}
                {{ $t('footer.companyDetails.phone.number') }}
              </a>
            </p>
            <p>
              <a
                class="hover:underline"
                :href="`mailto:${$t('footer.companyDetails.email')}`"
              >
                {{ $t('footer.companyDetails.email') }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <BaseBubble
      :width="900"
      :height="900"
      class="absolute -bottom-[600px] -left-[600px] -z-10 opacity-70"
    />
    <BaseBubble
      :width="900"
      :height="900"
      class="absolute -top-[680px] right-[50px] -z-10 hidden opacity-70 lg:block"
    />
  </div>
</template>
