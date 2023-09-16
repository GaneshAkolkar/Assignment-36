function areAllSameType(arr) {
    const firstType = typeof arr[0];
    return arr.every(item => typeof item === firstType);
  }
  
  const mixedArray = [1, 'apple', true];
  console.log(areAllSameType(mixedArray));
  