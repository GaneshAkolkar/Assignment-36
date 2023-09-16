function generateRandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }
  
  const randomId = generateRandomId(12); // Change the length as needed
  console.log(randomId);
  