<script lang="ts">
  import { format } from 'date-fns';

  export let item: Record<string, string | number | boolean>;
  export let formatString: string;

  let formattedString: string = '';

  const predefined: Record<string, string> = {
    today: format(new Date(), 'dd.MM.yyyy'),
    now: format(new Date(), 'HH:mm'),
  };

  const getFormattedString = () => {
    const matches = formatString.match(/\[[a-zA-Z]+\]/g) || [];

    return matches.reduce((formattedString, match) => {
      const key = match.slice(1, -1);
      const value = item[key] ?? predefined[key] ?? 'Unknown';

      return formattedString.replace(match, value + '');
    }, formatString);
  };

  $: if (formatString) {
    formattedString = getFormattedString();
  }
</script>

<div class="p-4 border rounded shadow">
  {formattedString}
</div>
