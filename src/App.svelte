<script lang="ts">
  import type { Item } from "./types/item";
  import TextInput from "./components/common/input/TextInput.svelte";
  import Card from "./components/common/card/Card.svelte";
  import TextParse from "./components/format/TextParse.svelte";

  const items: Item[] = [
    {
      id: 0,
      firstName: "Petter",
      surname: "Hannson",
      age: 56,
    },
    {
      id: 1,
      firstName: "Lars",
      surname: "Gregman",
      age: 23,
    },
    {
      id: 2,
      firstName: "Ulgar",
      surname: "Nilsson",
      age: 67,
    },
    {
      id: 3,
      firstName: "Sechuanda",
      surname: "Yen",
      age: 16,
    },
  ];

  let formatString: string = "";
</script>

<div>
  <div class="p-4">
    <TextInput id="format" bind:value={formatString} />
  </div>

  <div class="grid grid-cols-4 gap-4 p-4">
    {#each items as item}
      <Card {item} />
    {/each}
  </div>

  <div class="grid grid-cols-4 gap-4 p-4">
    {#each items as item}
      <TextParse {item} {formatString} />
    {/each}
  </div>
</div>
