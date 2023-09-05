const isNumber = (input) => {
  return typeof input === "number";
};

export const calc = (num1, op, num2) => {
  if (!(isNumber(num1) && isNumber(num2))) {
    throw new Error("Invalid input type");
  }

  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Division by zero");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid Operator");
  }
};
