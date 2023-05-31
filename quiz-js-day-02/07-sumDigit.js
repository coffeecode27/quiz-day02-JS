function sumDigit(n) {
    if (typeof n === 'number') {
      n = String(n);
    }
    
    if (typeof n !== 'string' || !/^\d+$/.test(n)) {
      return `${n} is not a number, try again...`;
    }
  
    if (parseInt(n) >= 10000) {
      return `${n} must be less than 10000`;
    }
  
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += Number(n[i]);
    }
  
    return sum;
  }
  
  console.log(sumDigit(1234));    // 10
  console.log(sumDigit("1234"));  // 10
  console.log(sumDigit(12345));   // 12345 must be less than 10000
  console.log(sumDigit('a123'));  // a123 is not a number, try again...
  