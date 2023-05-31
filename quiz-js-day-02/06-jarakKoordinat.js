function getCordinat(x1, y1, x2, y2) {
    x1 = convertToNumber(x1);
    y1 = convertToNumber(y1);
    x2 = convertToNumber(x2);
    y2 = convertToNumber(y2);
  
    if (!isNumber(x1) || !isNumber(y1) || !isNumber(x2) || !isNumber(y2)) {
      return 'Input kordinat dalam angka';
    }
  
    const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    if (isInteger(x1) && isInteger(y1) && isInteger(x2) && isInteger(y2)) {
      return distance.toFixed(0);
    } else {
      return distance.toFixed(15);
    }
  }
  
  function convertToNumber(value) {
    if (typeof value === 'string') {
      if (!isNaN(value)) {
        return Number(value);
      }
    }
    return value;
  }
  
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  
  function isInteger(value) {
    return Number.isInteger(value);
  }
  
  console.log(getCordinat(3, 4, -4, -5));        // 11
  console.log(getCordinat("1", "2", "-1", "-2")); // 4
  console.log(getCordinat("x", "2", "-y", "-2")); // Input kordinat dalam angka
  console.log(getCordinat(3.2, 4.5, -4.4, -5));  // 12.165936051122411

  