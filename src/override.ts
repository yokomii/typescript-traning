export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  switch(typeof value) {
    case 'number' : return value * 2;
    case 'string' : return value + value;
  }
}

console.log(double(100));
console.log(double('ha'));



