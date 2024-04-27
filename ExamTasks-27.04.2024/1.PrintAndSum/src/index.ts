function printAndSum(x: number, y: number): void {
  let sum: number = 0;
  let printLine: string = '';

  for (let i: number = x; i <= y; i++) {
    printLine += `${i} `;
    sum += i;
  }

  console.log(printLine);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
