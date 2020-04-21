const removeElementAt = (arr, i, mutate = false) =>
  i
    ? mutate
      ? arr.splice(i, 1) && arr
      : [...arr.slice(0, i), ...arr.slice(i + 1)]
    : arr;
