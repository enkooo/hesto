<script setup lang="ts">
import { Button } from '@/components/ui/button'

const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('pl')">pl</button>
      locale:{{ locale }}
      <p>{{ $t('welcome') }}</p>
      <p>{{ $t('hello') }}</p>

      <p>---------</p>

      <NuxtLink :to="switchLocalePath('pl')">Polish</NuxtLink>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>

      <Button>Click me2</Button>
    </div>
  </div>
</template>
