import { calc } from "./calc";

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

    // Test case: Subtraction
    it('should return the correct difference of two numbers', () => {
      expect(calc(5, '-', 2)).toBe(3);
    });
  
    // Test case: Multiplication
    it('should return the correct product of two numbers', () => {
      expect(calc(4, '*', 6)).toBe(24);
    });
  
    // Test case: Division
    it('should return the correct quotient of two numbers', () => {
      expect(calc(10, '/', 2)).toBe(5);
    });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });
  
});