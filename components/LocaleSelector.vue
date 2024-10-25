<script setup>
import { ref } from 'vue'

const { locale, locales, setLocale } = useI18n()
const selectedLocale = ref(locale.value)

const updateLocale = (newLocale) => {
  setLocale(newLocale)
}
</script>

<template>
  <Select
    v-model="selectedLocale"
    @update:model-value="updateLocale"
  >
    <SelectTrigger class="w-16 border-none">
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
