function calc(...args) {
  const proiority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  const applyOperation = (left, operator, right) => {
    switch (operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        if (right === 0) {
          throw new Error('Division by zero');
        }
        return left / right;
      default:
        throw new Error('Invalid operator');
    }
  }

  const operandStack = [];
  const operatorStack = [];

  args.forEach((token,index) => {
    if(index%2==0){
      if (typeof token === 'number') {
        operandStack.push(token);
      } 
      else{
        throw new Error('Invalid input type');
      }
    }
    else if (typeof token === 'string' && Object.keys(proiority).includes(token)) {
      while (
        operatorStack.length > 0 &&
        proiority[operatorStack[operatorStack.length - 1]] >= proiority[token]
      ) {
        const rightOperand = operandStack.pop();
        const leftOperand = operandStack.pop();
        const op = operatorStack.pop();
        const result = applyOperation(leftOperand, op, rightOperand);
        operandStack.push(result);
      }
      operatorStack.push(token);
    } else {
      throw new Error('Invalid operator');
    }
  });
  
  while (operatorStack.length > 0) {
    const rightOperand = operandStack.pop();
    const leftOperand = operandStack.pop();
    const op = operatorStack.pop();
    const result = applyOperation(leftOperand, op, rightOperand);
    operandStack.push(result);
  }


  if (operandStack.length === 1) {
    return operandStack[0];
  } else {
    throw new Error('Invalid expression');
  }
}

try {
  const result = calc('2', '+', 3);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}