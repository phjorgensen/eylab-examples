<script lang="ts">
  import type { Item } from "src/types/item";

  export let item: Item;
</script>

<div class="flex flex-col p-4 pb-5 border rounded shadow">
  <div>
    <span class="font-bold">ID:</span>
    {item.id}
  </div>

  <div>
    <span class="font-bold">First name:</span>
    {item.firstName}
  </div>

  <div>
    <span class="font-bold">Surname:</span>
    {item.surname}
  </div>

  <div>
    <span class="font-bold">Age:</span>
    {item.age}
  </div>
</div>
