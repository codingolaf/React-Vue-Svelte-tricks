<script setup lang="ts">
import { computed } from 'vue'
import { groupBy } from 'lodash-es'

import RecipientsDisplay from '@/components/RecipientsDisplay.vue'
import DateDisplay from '@/components/DateDisplay.vue'
import TimeDisplay from '@/components/TimeDisplay.vue'

import type { Email } from '@/types/Email'

const props = defineProps<{
  emails: Email[]
}>()

// Convert into an array of arrays based on date sent
const emailGroupsByDate = computed(() => {
  const emailsByDate = groupBy<Email>(props.emails, ({ datetime }) =>
    new Date(datetime).toLocaleDateString()
  )
  return Object.values(emailsByDate)
})
</script>

<template>
  <table cellspacing="0">
    <thead>
      <tr>
        <th>Sender</th>
        <th>Recipients</th>
        <th>Subject</th>
        <th class="align-right">Date</th>
        <th class="align-right">Time</th>
      </tr>
    </thead>
    <tbody v-for="emailGroup in emailGroupsByDate" :key="emailGroup[0].datetime">
      <tr
        v-for="{ from, to: recipients, subject, datetime } in emailGroup"
        :key="subject + datetime"
      >
        <td>{{ from }}</td>
        <td>
          <RecipientsDisplay :recipients="recipients" />
        </td>
        <td>{{ subject }}</td>
        <td class="align-right">
          <DateDisplay :datetime="datetime" />
        </td>
        <td class="align-right">
          <TimeDisplay :datetime="datetime" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
:root {
  --border-style: solid 1px #777;
}

table {
  table-layout: fixed;
  border: var(--border-style);
  width: 100%;
  text-align: left;
}
th,
td {
  border: var(--border-style);
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 34px;
  box-sizing: border-box;
}
th:nth-child(1) {
  width: 20%;
}
th:nth-child(2) {
  width: 30%;
}
th:nth-child(3) {
  width: 50%;
}
th:nth-child(4) {
  width: 90px;
}
th:nth-child(5) {
  width: 70px;
}
tbody:nth-child(even) {
  background-color: #ddd;
}
.align-right {
  text-align: right;
}
</style>
