export {};

class LAntica {
  constructor(readonly members: string[]) {}
}

const lAntica = new LAntica(['kogane', 'mamimi', 'sakuya', 'yuika', 'kiriko']);
console.log(lAntica.members);
