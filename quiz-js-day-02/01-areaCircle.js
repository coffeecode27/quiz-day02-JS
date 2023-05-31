function getAreaCircle(r) {
  if (typeof r !== 'number') {
    return 'Inputan harus dalam angka';
  }

  if (r <= 0) {
    return `radius ${r} <= 0, try higher`;
  }

  const pi = 3.14159;
  const area = pi * r * r;
  return area;
}

console.log(getAreaCircle(-1)); // return radius -1 <= 0, try higher
console.log(getAreaCircle('a'));  // return Inputan harus dalam angka
console.log(getAreaCircle(5));    // return 78.53975
