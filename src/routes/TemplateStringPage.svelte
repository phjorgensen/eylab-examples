<script lang="ts">
  import type { Person } from '$types/template-string/person';
  import TextInput from '$comps/common/input/TextInput.svelte';
  import PersonCard from '$comps/template-string/PersonCard.svelte';
  import TextParse from '$comps/format/TextParse.svelte';

  const people: Person[] = [
    {
      id: 0,
      firstName: 'Petter',
      surname: 'Hannson',
      age: 56,
    },
    {
      id: 1,
      firstName: 'Lars',
      surname: 'Gregman',
      age: 23,
    },
    {
      id: 2,
      firstName: 'Ulgar',
      surname: 'Nilsson',
      age: 67,
    },
    {
      id: 3,
      firstName: 'Sechuanda',
      surname: 'Yen',
      age: 16,
    },
  ];

  let formatString: string = 'My name is [firstName], the date is [today] and the time is [now].';
</script>

<div>
  <div class="p-4">
    <TextInput id="format" label="Template:" bind:value={formatString} />
  </div>

  <div class="grid grid-cols-4 gap-4 p-4">
    {#each people as person}
      <PersonCard {person} />
    {/each}
  </div>

  <div class="grid grid-cols-4 gap-4 p-4">
    {#each people as item}
      <TextParse {item} {formatString} />
    {/each}
  </div>
</div>
