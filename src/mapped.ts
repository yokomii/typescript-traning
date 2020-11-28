export {};

type Profile = {
  name: string;
  age: number;
};

type PartailProfile = Optional<Profile>;
type ProfileType = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P];
};
