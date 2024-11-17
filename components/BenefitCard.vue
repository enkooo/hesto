<script setup lang="ts">
const { title, description } = defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <Card class="border-0 shadow-md transition-shadow hover:shadow-lg">
    <CardHeader>
      <div class="flex items-center space-x-2">
        <Icon
          :name="icon"
          class="text-primary"
          size="30"
        />
        <CardTitle class="text-lg font-semibold">{{ title }}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p class="text-typography-gray">{{ description }}</p>
    </CardContent>
  </Card>
</template>
