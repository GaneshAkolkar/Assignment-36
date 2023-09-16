function modifyArray(arr) {
    if (arr.length >= 5) {
      arr[4] = 'modified';
      return arr;
    } else {
      return 'Item not found';
    }
  }
  
  const myArray = [1, 2, 3, 4];
  console.log(modifyArray(myArray));
  