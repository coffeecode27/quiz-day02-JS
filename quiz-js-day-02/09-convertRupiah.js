function convertToRupiah(money, type) {
    const conversionRates = {
      yen: 130.12,
      usd: 14382.5,
      euro: 16000,
    };
  
    if (type === '') {
      return 'No match type currency';
    }
  
    const convertedAmount = money * conversionRates[type];
  
    return `${money} ${type} = Rp.${convertedAmount.toLocaleString()}`;
  }
  
  console.log(convertToRupiah(1000, 'yen')); // Output: 1000 yen = Rp.130,120
  console.log(convertToRupiah(100, 'usd')); // Output: 100 usd = Rp.1,438,250
  console.log(convertToRupiah(100, 'euro')); // Output: 100 euro = Rp.1,600,000
  console.log(convertToRupiah(100, '')); // Output: No match type currency
  