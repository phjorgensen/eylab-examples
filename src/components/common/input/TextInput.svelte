<script lang="ts">
  export let id: string;
  export let label: string = "";
  export let placeholder: string = "";
  export let value: string = "";
</script>

<div class="flex flex-col">
  <label for={id}>{label}</label>
  <input {id} {placeholder} class="p-2 border rounded shadow" bind:value />
</div>
