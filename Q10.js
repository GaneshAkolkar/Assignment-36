function isValidVariable(variableName) {
    const validRegex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
    return validRegex.test(variableName);
  }
  
  const variableName = 'my_variable';
  console.log(isValidVariable(variableName));
  