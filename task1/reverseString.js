const reverseString = (str) => {
  if (typeof str != "string") throw new Error("I need a String");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// javascript building methods
const reverseString1 = (str) => {
  if (typeof str != "string") throw new Error("I need a String");
  return str.split("").reverse().join("");
};
