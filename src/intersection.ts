export {};

type Idol = {
  visual: number;
  vocal: number;
  dance: number;
};

type Producer = {
  lank: string;
};

const miki: Idol = {
  visual: 100,
  vocal: 50,
  dance: 70,
};

const namcoP: Producer = {
  lank: 'D',
};

type IdolProducer = Idol & Producer;

const Ritsuko: IdolProducer = {
  visual: 50,
  vocal: 60,
  dance: 50,
  lank: 'C',
};
