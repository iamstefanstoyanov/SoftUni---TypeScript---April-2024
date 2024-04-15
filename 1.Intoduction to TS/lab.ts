/* function area(x:number,y:number):void{
    console.log(x*y)
}
area(5,7)
area(6,8) 

function lNumber(x:number,y:number,z:number):void{
    console.log('The lagest number is ' + Math.max(x,y,z))
}
lNumber(5, -3, 16)
lNumber(-3, -5, -22.5)



function numb(x:string,y:string):void{
    let sum:number = 0;
    for(let i = +x; i <= +y; i++){
        sum+=i
    }
    console.log(sum);
}
numb('-8','20')



function day(day: string): void {
    let cDay:string;
  switch (day) {
    case 'Monday': cDay = '1';
      break;
    case 'Tuesday':cDay = '2';
      break;
    case 'Wednesday':cDay = '3';
      break;
    case 'Thurseday':cDay = '4';
      break;
    case 'Friday':cDay = '5';
      break;
    case 'Saturday':cDay = '6';
      break;
    case 'Sunday': cDay = '7';
      break;
    default:cDay='Error'
      break;
  }
  console.log(cDay);
}
day('Monday')
day('Saturday')
day('asds')



function operation(x: number, y: number, op:string): void {
    let result:number;
  switch (op) {
    case '+': result = x + y;
      break;
    case '-':result = x - y;
      break;
    case '*':result = x * y;
      break;
    case '/':result = x / y;
      break;
  }
  console.log(result);
}
operation(5, 6, '+')
operation(3, 5.5, '*')


function arr(arr:string[]):void {
    let result:string = '';
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result += arr[i] + " ";
        }
    }
    console.log(result.trim());
}
arr(['20', '30', '40', '50', '60'])



function arr(arr: number[]): void {
    let sortedArr = arr.sort((a,b)=> a - b);
    let result = sortedArr.slice(Math.floor(arr.length/2))
    console.log(result)
}
arr([4, 7, 2, 5])
arr([3, 19, 14, 7, 2, 19, 6])


function cats(catsArr:string[]) {
    class Cat {
        public name:string;
        public age:number;
        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for (let catAsString of catsArr) {
        let tokens = catAsString.split(' ');
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat);
    }
    for (let cat of cats) {
        cat.meow()
    }
}

cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])


function generateEmployeeList(employees: string[]): void {
    for (let employee of employees) {
        const personalNum: number = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${personalNum}`);
    }
}

generateEmployeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

function aggregateElements(arr: number[]): void {
    const sumOfElements: number = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sumOfElements);
    const sumOfInverse: number = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(sumOfInverse);
    const concatenatedString: string = arr.join('');
    console.log(concatenatedString);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
*/