export {};

class LAntica {
  private _member = ['kogane', 'mamimi', 'sakuya', 'yuika', 'kiriko'];
  private _scone = 0;

  get member() {
    return this._member;
  }

  set scone(scone: number) {
    this._scone = scone;
  }

  outputSconeCount() {
    console.log(`scone count:${this._scone}`);
  }
}

const lAntica = new LAntica();
console.log(lAntica.member[0]);
lAntica.scone = 10;
lAntica.outputSconeCount();
