<script setup lang="ts"></script>

<template>
  <div
    :id="$t('links.contact').split('#')[1]"
    class="container mt-20 pb-20"
  >
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('contactForm.heading') }}</h2>
      <p class="mt-7 text-typography-gray">{{ $t('contactForm.subheading') }}</p>
    </section>
  </div>
</template>
