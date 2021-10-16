<script>
  import SidemenuItem from '$comps/navigation/SidemenuItem.svelte';
</script>

<nav class="bg-blue-400 p-3 h-full">
  <ul class=" flex gap-3">
    <SidemenuItem text="Dashboard" path="/" />
    <SidemenuItem text="Template string" path="/template-string" />
  </ul>
</nav>
