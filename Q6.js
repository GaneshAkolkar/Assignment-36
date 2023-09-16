function capitalizeArray(arr) {
    return arr.map(item => item.toUpperCase());
  }
  
  const originalArray = ['apple', 'banana', 'cherry'];
  const capitalizedArray = capitalizeArray(originalArray);
  console.log(capitalizedArray);
  