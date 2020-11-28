export {};

type Profile = {
  name: string;
  age: number;
  zipCode?: number;
};

type PartioalProfile = Partial<Profile>;
type RequiredProfile = Required<Profile>;
type ReadonlyProfile = Readonly<Profile>;

type Pair = 'fist' | 'second'
type RecordProfile = Record<Pair, Profile>;