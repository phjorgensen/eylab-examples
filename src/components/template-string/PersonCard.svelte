<script lang="ts">
  import type { Person } from '$types/template-string/person';
  import Card from '$comps/common/card/Card.svelte';

  export let person: Person;
</script>

<Card>
  <div class="flex flex-col">
    <div>
      <span class="font-bold">id:</span>
      {person.id}
    </div>

    <div>
      <span class="font-bold">firstName:</span>
      {person.firstName}
    </div>

    <div>
      <span class="font-bold">surname:</span>
      {person.surname}
    </div>

    <div>
      <span class="font-bold">age:</span>
      {person.age}
    </div>
  </div>
</Card>
