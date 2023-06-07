function generatePattern(n) {
    let pattern = '';
  
    for (let i = 5; i <= n; i++) {
      let row = '';
  
      for (let j = i; j <= i + (i - 5); j++) {
        row += j + ' ';
      }
  
      pattern += row + '\n';
    }
  
    return pattern;
  }
  
  const result = generatePattern(10);
  console.log(result);
  