// Currying Function in js
const add = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

const levelOne = add(5);
console.log(levelOne(10)(10));

console.log(add(1)(2)(3));

console.log(add(5)(2)(1));

// Answers [500, 6, 10]
