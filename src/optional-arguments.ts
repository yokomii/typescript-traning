export {};

let bmi = (height: number, weight: number, isOutput?: boolean) => {
  let bmi = weight / (height * height);
  if (isOutput) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.66, 52, true);
