function sumOfArrayItems(arr) {
    let sum = 0;
  
    for (const item of arr) {
      if (typeof item !== 'number') {
        return 'Some array items are not numbers.';
      }
      sum += item;
    }
  
    return sum;
  }
  
  const numArray = [1, 2, 3, 4, 5];
  console.log(sumOfArrayItems(numArray));
  