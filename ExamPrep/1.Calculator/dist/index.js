/* function calculator(x: number, op: string, y: number): void {
  let result: number;

  switch (op) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      if (y === 0) {
        console.log('Error: Division by zero.');
        return;
      }
      result = x / y;
      break;
    default:
      console.log('Invalid operator');
      return;
  }

  console.log(result.toFixed(2));
} */
function calculator(x, op, y) {
    const dictCalculator = {
        '+': (x + y).toFixed(2),
        '-': (x - y).toFixed(2),
        '*': (x * y).toFixed(2),
        '/': (x / y).toFixed(2),
    };
    if (op === '/' && y === 0) {
        return 'Error 0';
    }
    if (!dictCalculator[op]) {
        return 'Error Op';
    }
    return dictCalculator[op];
}
const result = calculator(5, '+', 10);
const result1 = calculator(25.5, '-', 3);
const result2 = calculator(9, '/', 2);
const result3 = calculator(7, '*', 5);
const result4 = calculator(7, '/', 0);
const result5 = calculator(7, 'hgfhgf', 5);
console.log(result, result1, result2, result3, result4, result5);
