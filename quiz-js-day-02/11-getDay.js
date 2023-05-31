function getDays(month, year) {
    if (isNaN(month) || isNaN(year)) {
      if (isNaN(month) && isNaN(year)) {
        return "Inputan bulan dan tahun harus dalam bentuk angka";
      } else if (isNaN(month)) {
        return "Inputan bulan harus dalam bentuk angka";
      } else if (isNaN(year)) {
        return "Inputan tahun harus dalam bentuk angka";
      }
    }
  
  
    const daysInMonth = new Date(year, month, 0).getDate();
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
    if (isLeapYear) {
      return `This month has ${daysInMonth} days. ${year} adalah tahun kabisat`;
    } else {
      return `This month has ${daysInMonth} days`;
    }
  }
  
  console.log(getDays("a", 2021)); // Output: Inputan bulan harus dalam bentuk angka
  console.log(getDays("1", "year")); // Output: Inputan tahun harus dalam bentuk angka
  console.log(getDays("m", "year")); // Output: Inputan bulan & tahun harus dalam bentuk angka
  console.log(getDays(2, 2000)); // Output: This month has 29 days. 2000 adalah tahun kabisat
  console.log(getDays(8, 2021)); // Output: This month has 31 days
  