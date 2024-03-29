export function greet(name?: string | string[]): string {
  if (!name) {
    return 'Hello, friend.';
  }

  if (typeof name === 'string') {
    name = [name];
  }

  name = name.reduce((names, name) => {
    const from = name.indexOf('"');
    const to = name.indexOf('"', from + 1);
    const commaIndex = name.indexOf(', ');

    if (name.includes(', ') && commaIndex > from && commaIndex < to) {
      return [...names, name.split('"').join('')];
    } else {
      names = [...names, ...name.split(', ')];
    }

    return names;
  }, []);

  const [normal, shout] = name.reduce(
    (names, name) => {
      const index = name.toUpperCase() === name ? 1 : 0;
      names[index].push(name);

      return names;
    },
    [[], []],
  );

  const getNormalString = (names: string[]): string => {
    if (!names?.length) {
      return undefined;
    }

    if (names.length < 3) {
      return `Hello, ${names.join(' and ')}.`;
    } else {
      const lastName = names.pop();
      const namesWithComma = names.join(', ');
      return `Hello, ${[namesWithComma, lastName].join(', and ')}.`;
    }
  };

  const getShoutString = (names: string[]): string => {
    if (!names?.length) {
      return undefined;
    }

    if (names.length < 3) {
      return `HELLO ${names.join(' AND ')}!`;
    } else {
      const lastName = names.pop();
      const namesWithComma = names.join(', ');
      return `HELLO ${[namesWithComma, lastName].join(', AND ')}!`;
    }
  };

  const normalNameString = getNormalString(normal);
  const shoutNameString = getShoutString(shout);

  const nameStrings = [];
  if (normalNameString) nameStrings.push(normalNameString);
  if (shoutNameString) nameStrings.push(shoutNameString);

  return nameStrings.join(' AND ');
}
