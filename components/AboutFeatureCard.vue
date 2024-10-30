<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="h-full rounded-md bg-white p-7 shadow-xl">
    <div class="flex items-center justify-start gap-2">
      <Icon
        :name="icon"
        class="text-primary"
        size="20"
      />
      <h4 class="font-bold">{{ title }}</h4>
    </div>
    <p class="text-typography-gray mt-2 text-left text-sm">{{ description }}</p>
  </div>
</template>
