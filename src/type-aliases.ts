export {};

type Mojiretsi = string;
const name: Mojiretsi = 'name';

type Profile = { name: string };
const profileImpl: Profile = {
  name: 'name',
};

type Profile2 = typeof profileImpl;
const profileImpl2: Profile2 = {
  name: 'name',
};
