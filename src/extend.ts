export {};

class Idol {
  constructor(public name: string) {}

  sing() {
    return 'あー';
  }
}

class Kiriko extends Idol {
  constructor(public name: string) {
    super(name);
    console.log('ふふ……');
  }

  fry() {
    return 'おいしいエビさん';
  }

  sing() {
    return '花のように';
  }
}

const kiriko = new Kiriko('kiriko');
console.log(kiriko.name);
console.log(kiriko.sing());
