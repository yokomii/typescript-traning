export {};

class LAntica {
  static members = ['kogane', 'mamimi', 'sakuya', 'yuika', 'kiriko'];

  static memberCount(): number {
    return this.members.length;
  }
}

console.log(LAntica.members);
console.log(LAntica.memberCount());
