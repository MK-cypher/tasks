// using ternary operator
const evenOrOddTernary = (num) => {
  if (typeof num != "number") throw new Error("I need a number");
  return num % 2 == 0 ? "Even" : "Odd";
};

// normal if
const evenOrOdd = (num) => {
  if (typeof num != "number") throw new Error("I need a number");
  if (num % 2 == 0) return "Even";
  return "Odd";
};
