export {};

abstract class Idol {
  abstract sing(): string;
}

class Kiriko extends Idol {
  sing(): string {
    return '花のように';
  }
}

const kiriko = new Kiriko();
console.log(kiriko.sing());
