<script setup lang="ts">
const props = defineProps<{
  datetime: string
}>()

const datetimeObject = new Date(props.datetime)
const today = new Date()

const options: Intl.DateTimeFormatOptions = {
  year: datetimeObject.getFullYear() === today.getFullYear() ? undefined : '2-digit',
  month: '2-digit',
  day: '2-digit'
}

const date = datetimeObject.toLocaleDateString('en-US', options)
</script>

<template>
  <span>{{ date }}</span>
</template>
