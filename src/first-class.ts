export {};

class Idol {
  private name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile() {
    return `${this.name}, ${this.age}`;
  }
}

class Private extends Idol {
  getNationality() {
    return this.nationality
  }
}

let kiriko = new Private('kiriko', 17, 'japan');
console.log(kiriko.getNationality());
