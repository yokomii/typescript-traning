export {};

namespace Namco {
  export class Idol {
    constructor(public firstName: string, public lastName: string) {}
  }

  export namespace HeighScool {
    export class Idol {
      constructor(
        public firstName: string,
        public lastName: string,
        public year: number
      ) {}
    }
  }
}

namespace Tsubasa {
  export class Idol {
    constructor(
      public firstName: string,
      public lastName: string,
      public unit: string
    ) {}
  }
}

const kiriko = new Tsubasa.Idol('kiriko', 'yukoku', 'LAntica');
const miki = new Namco.Idol('miki', 'hoshii');
const haruka = new Namco.HeighScool.Idol('haruka', 'amami', 2);
