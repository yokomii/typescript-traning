export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('name', 0);

type Profile = Parameters<typeof debugProfile>;
