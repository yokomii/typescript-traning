export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'kiriko',
  underTwenty: false,
};

profile.age = 17;
console.log(profile.age);
