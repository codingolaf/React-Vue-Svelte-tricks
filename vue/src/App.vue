<script setup lang="ts">
import AuditTable from '@/components/AuditTable.vue'
import FakeData from './fake-data'

const props = defineProps<{
  appName: string
}>()
const emails = FakeData
</script>

<template>
  <main>
    <h1>{{ props.appName }}</h1>
    <AuditTable :emails="emails" />
  </main>
</template>

<style>
main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
}

h1 {
  color: var(--color-primary);
  font-size: 4em;
  font-weight: 100;
}
</style>
