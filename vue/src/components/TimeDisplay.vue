<script setup lang="ts">
const props = defineProps<{
  datetime: string
}>()

const datetimeObject = new Date(props.datetime)

const options: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit'
}

const time = datetimeObject.toLocaleTimeString('en-US-u-hc-h23', options)
</script>

<template>
  <span>{{ time }}</span>
</template>
