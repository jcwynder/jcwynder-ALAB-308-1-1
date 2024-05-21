// 1. Math Problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(
  `The four numbers are valid according to the provided criteria: ${isValid}.`
);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

// Check if all numbers are divible by 5
const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(
  `The four numbers are divisible by 5 according to the provided criteria: ${isDivisibleBy5}.`
);

// Check if first number is larger than last
const firstIsGreaterThanLast = n1 > n4;
console.log(
  `The first number is greater than the last number according to the provided criteria: ${firstIsGreaterThanLast}.`
);

// Arithemtic chain:
// subtract number 1 from the number 2
// multiply the result by number 3
// find remainder by dividing the last result by number 4
let arithemticChain = ((n2 - n1) * n3) % n4;
console.log(`The remainder of the arithemtic chain is: ${arithemticChain}.`);

// Change isOver25 so that you don't have to use !
// in other logic comparisons
const newIsOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
const newisValid = isSum50 && isTwoOdd && newIsOver25 && isUnique;
console.log(
  `Without using ! in isOver25, the alternative method used for is newIsOver25, and when used in newIsValid also results in: ${newisValid}.`
);

// 2. Practical Math Problems

const totalMiles = 1500;
const fuelBudget = 150;
const fuelPerGallon = 3;

// Total gallons of fuel needed for entire trip
const totalGallons = totalMiles / 30 + totalMiles / 28 + totalMiles / 23;
console.log(
  `The total amount of gallons needed for the trip is ${totalGallons} gallons.`
);

// Will fuel budget cover total fuel expense?
const totalFuelCost = totalGallons * 3;
console.log(
  `The total fuel cost is ${totalFuelCost}. Since ${totalFuelCost} is greater than ${fuelBudget}, you do not have enough to cover the trip.`
);

// Hours needed for total trip
const totalHours = totalMiles / 55 + totalMiles / 60 + totalMiles / 75;
console.log(
  `The total amount of hours needed for the trip is ${totalHours} hours.`
);
