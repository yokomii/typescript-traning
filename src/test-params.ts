export {};

const reduser = (a: number, b: number) => a + b;
const sum = (...values: number[]) => console.log(values.reduce(reduser));

sum(1, 2, 3, 4, 5);
