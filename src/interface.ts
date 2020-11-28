export {};

interface Idol {
  sing(): string;
}

interface Lantica {
  story(): string;
}

class Kiriko implements Idol, Lantica {
  static lastName = 'kiriko';

  sing() {
    return '花のように';
  }

  story() {
    return '生きてるってことは物語じゃないから';
  }
}

const kiriko = new Kiriko();
