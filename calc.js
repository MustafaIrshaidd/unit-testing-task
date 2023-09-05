export const calc = (...args) => {
  // Priority for Operator Types
  const proiority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  // Operations functions
  const applyOperation = (left, operator, right) => {
    switch (operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        if (right === 0) {
          throw new Error("Division by zero");
        }
        return left / right;
      default:
        throw new Error("Invalid operator");
    }
  };

  // Stack for operand
  const operandStack = [];

  // Stack for operator
  const operatorStack = [];

  // Loop the function paramaters
  args.forEach((token, index) => {
    // Checks index : if it's even then its a number
    if (index % 2 == 0) {
      // Checks if number is actually a number
      if (typeof token === "number") {
        // If number is bigger than 1000
        if (token > 1000) {
          // If number is not the first argument then pop the operator from stack
          if (operandStack.length > 0) {
            operatorStack.pop();
          }
          // If number is first then its invalid statement
          else {
            throw new Error("Invalid statement");
          }
          return;
        }
        // If its normal number then push it to operand
        operandStack.push(token);
      }
      // If its not normal then throw error
      else {
        throw new Error("Invalid input type");
      }
    } else if (
      typeof token === "string" &&
      Object.keys(proiority).includes(token)
    ) {
      while (
        operatorStack.length > 0 &&
        proiority[operatorStack[operatorStack.length - 1]] >= proiority[token]
      ) {
        //calculate the right and left operand with the right operator based on priority map with the value 2
        const rightOperand = operandStack.pop();
        const leftOperand = operandStack.pop();
        const op = operatorStack.pop();
        const result = applyOperation(leftOperand, op, rightOperand);
        operandStack.push(result);
      }
      operatorStack.push(token);
    } else {
      // Else then its invalid operator -> does not exist in priority map
      throw new Error("Invalid operator");
    }
  });

  //calculate the right and left operand with the right operator based on priority map with the value 1
  while (operatorStack.length > 0) {
    const rightOperand = operandStack.pop();
    const leftOperand = operandStack.pop();
    const op = operatorStack.pop();
    const result = applyOperation(leftOperand, op, rightOperand);
    operandStack.push(result);
  }

  // return the last value in stack
  if (operandStack.length === 1) {
    return operandStack[0];
  } else {
    throw new Error("Invalid expression");
  }
};
