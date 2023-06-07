function compareArrays(array1, array2) {
    const same = [];
    const different = [];
  
    array1.forEach((element) => {
      if (array2.includes(element) && !same.includes(element)) {
        same.push(element);
      } else if (!different.includes(element)) {
        different.push(element);
      }
    });
  
    array2.forEach((element) => {
      if (!array1.includes(element) && !different.includes(element)) {
        different.push(element);
      }
    });
  
    return [same,different];
  }
  
  const array1 = ["Mangga", "Apel", "Melon", "Pisang", "Sirsak", "Tomat", "Nanas", "Nangka", "Timun", "Mangga"];
  const array2 = ["Bayam", "Wortel", "Kangkung", "Mangga", "Tomat", "Kembang Kol", "Nangka", "Timun"];
  
  const[same, different] = compareArrays(array1, array2);
  console.log("Same =", same);
  console.log("Different =",different);
  