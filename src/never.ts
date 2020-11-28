export {};

function error(message: string): never {
  throw Error(message);
}

try {
  error('message');
} catch (e) {
  console.log({ e });
}

let val: never = error('message');
