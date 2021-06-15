const age = 96;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

function calculateKrAge2(ageOfForeigner) {
  ageOfForeigner + 2;
  return "hello";
}

const KrAge2 = calculateKrAge2(age);

console.log(KrAge2);
