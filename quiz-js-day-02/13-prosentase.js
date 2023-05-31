function getProsentase(start, end) {
    if (isNaN(start) || isNaN(end)) {
      return "abc or bca harus dalam angka";
    }
  
    const percentage = ((end - start) / start) * 100;
  
    if (percentage > 0) {
      return `Total kenaikan income ${percentage.toFixed(0)}%`;
    } else if (percentage < 0) {
      return `Total penurunan income ${Math.ceil(percentage)}%`;
    } else {
      return "Tidak ada perubahan income";
    }
  }
  
  console.log(getProsentase("abc", "bca")); // Output: abc or bca harus dalam angka
  console.log(getProsentase(600000.00, 750000.00)); // Output: Total kenaikan income 25%
  console.log(getProsentase(760000.00, 650000.00)); // Output: Total penurunan income -14%
  