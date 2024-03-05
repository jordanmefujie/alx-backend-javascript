export default function taskBlock(trueOrFalse) {
  let task = false; // Using let instead of var
  let task2 = true; // Using let instead of var

  if (trueOrFalse) {
    task = true; // Assigning new value without re-declaring the variable
    task2 = false; // Assigning new value without re-declaring the variable
  }

  return [task, task2];
}
