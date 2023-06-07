function rotateArray(array, k) {
    const rotatedArray = [...array];
    for (let i = 0; i < k; i++) {
      const lastElement = rotatedArray.pop();
      rotatedArray.unshift(lastElement);
    }
    return rotatedArray;
  }
  
  const arr = [3, 8, 9, 7, 6];
  console.log(rotateArray(arr, 3));