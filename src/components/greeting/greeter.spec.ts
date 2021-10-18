import { greet } from '$comps/greeting/greeter';

describe('Greeter', () => {
  it('should return "Hello, Bob."', () => {
    const greetBob = greet('Bob');
    expect(greetBob).toBe('Hello, Bob.');
  });

  it('should return another text if name is not provided', () => {
    const greetFriend = greet();
    expect(greetFriend).toBe('Hello, friend.');
  });

  it('should shout if name is uppercase', () => {
    const shoutToJerry = greet('JERRY');
    expect(shoutToJerry).toBe('HELLO JERRY!');
  });

  it('should handle more than one name', () => {
    const greetJillAndJane = greet(['Jill', 'Jane']);
    expect(greetJillAndJane).toBe('Hello, Jill and Jane.');
  });

  it('should handle more than two names', () => {
    const greetAmyBrianAndCharlotte = greet(['Amy', 'Brian', 'Charlotte']);
    expect(greetAmyBrianAndCharlotte).toBe('Hello, Amy, Brian, and Charlotte.');
  });

  it('should separate shout greetings and normal greetings', () => {
    const separateGreetings = greet(['Amy', 'BRIAN', 'Charlotte']);
    expect(separateGreetings).toBe(
      'Hello, Amy and Charlotte. AND HELLO BRIAN!',
    );
  });

  it('should split string with comma', () => {
    const stringWithComma = greet(['Bob', 'Charlie, Dianne']);
    expect(stringWithComma).toBe('Hello, Bob, Charlie, and Dianne.');
  });

  it('should respect escaped characters', () => {
    const escapedString = greet(['Bob', '"Charlie, Dianne"']);
    expect(escapedString).toBe('Hello, Bob and Charlie, Dianne.');
  });
});
