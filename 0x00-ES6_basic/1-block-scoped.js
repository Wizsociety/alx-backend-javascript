export default function taskBlock(trueOrFalse) {
  const task = false;  // Use 'const' instead of 'let'
  const task2 = true;  // Use 'const' instead of 'let'

  if (trueOrFalse) {
    const task = true;  // Declare variables with 'const' within block scope
    const task2 = false;
  }

  return [task, task2];
}
