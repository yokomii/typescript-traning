export {};

interface Unit {
  name: string;
}

class Idol {
  // unit : Unit | null = null
  unit?: Unit;
}

const kiriko = new Idol().unit?.name;
