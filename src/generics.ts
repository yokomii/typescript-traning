export {};

interface Production {}

class Tsubasa implements Production {}

class Idol<T extends Production> {
  constructor(public production: T) {}
}

const kiriko = new Idol(new Tsubasa());
