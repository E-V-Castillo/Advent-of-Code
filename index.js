//1. split the input into elves

const input = `100
200

100
200
300

700`;

let elves = input.split("\n\n");
// console.log(elves);
//2. split the elves by snacks
snacks = elves.map((elf) => {
  return elf.split("\n");
});

console.log(elves);
console.log(snacks);

calories = snacks.map(calculateCalories());

function calculateCalories(array) {
  array.reduce((total, item) => {
    return (total += item);
  });
}
console.log(calories);

//3. calculate the amount of snacks per elves

function splitCalories() {}

function biggest() {}
