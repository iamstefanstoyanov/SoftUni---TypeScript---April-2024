type Level = "low" | "mediun" | "hard";

interface Task2 {
  name: string;
  level: Level;
}

class Employee2 {
  @withTask({ name: "Task - 1", level: "mediun" })
  tasks: Task2[] = [];

  @withComplicatedTask()
  extraTasks: Task2[] = [];
}
const employee = new Employee2();
console.log(employee);

// Decorator's scope
function withTask(inputTask: Task2) {
  // Filed's scp[e]
  return function <T, V extends Task2[]>(
    target: undefined,
    context: ClassFieldDecoratorContext
  ) {
    return function (fieldValue: V) {
      fieldValue.push(inputTask);
      return fieldValue;
    };
  };
}

function withComplicatedTask() {
  // logic
  // based on input -> different decorators can be returned
  return withTask({ name: "Task - 0", level: "hard" });
}
