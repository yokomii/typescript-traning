export {};

const kansu = () => 43;

let numberAny: any = kansu();
let numbeUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numbeUnknown === 'number') {
  let sumUnknown = numbeUnknown + 10;
}
