export {};

type DetailedProfile = {
  name: string;
  height: number;
  wight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name'>
type SizeProfile = Omit<DetailedProfile, 'name'>;
