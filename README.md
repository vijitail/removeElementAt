# removeElementAt
Function to remove an element from an array at the specified index with or without mutation to the original array.

The `Array.prototype.slice()` method returns a subset of the array, so you can take advantage of this and slice the array in two parts that does not have the element at specific index in it. For mutating, you can simply use the `Array.prototype.splice()` method.

```JS
const removeElementAt = (arr, i, mutate = false) =>
  i
    ? mutate
      ? arr.splice(i, 1) && arr
      : [...arr.slice(0, i), ...arr.slice(i + 1)]
    : arr;
```

```JS
const a = ["JavaScript", "PHP", "Laravel", "Nodejs", "Python"];

const b = removeElementAt(a, 2); // will return a new array

const c = removeElement(a, 2, true) // will mutate the original array
```
