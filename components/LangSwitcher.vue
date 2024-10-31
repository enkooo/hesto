<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const selectedLocale = ref(locale.value)

const lang = computed({
  get: () => selectedLocale.value,
  set: (value) => {
    selectedLocale.value = value
    setLocale(value)
  },
})
</script>

<template>
  <Select v-model="lang">
    <SelectTrigger class="w-16 border-none bg-transparent">
      <SelectValue>
        {{ selectedLocale.toUpperCase() }}
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="loc in locales"
        :key="loc.code"
        :value="loc.code"
        :disabled="loc.code === selectedLocale"
      >
        <SelectItemText> {{ loc.name }}</SelectItemText>
      </SelectItem>
    </SelectContent>
  </Select>
</template>
