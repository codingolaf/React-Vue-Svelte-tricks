<script lang="ts">
  import AuditTable from './components/AuditTable.svelte'
  import FakeData from './fake-data'

  export let appName: string
  const emails = FakeData
</script>

<main>
  <h1>{appName}</h1>
  <AuditTable {emails} />
</main>

<style lang="scss">
  @use './styles/variables';

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: variables.$color-primary;
    font-size: 4em;
    font-weight: 100;
  }
</style>
