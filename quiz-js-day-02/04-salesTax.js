function getSalesTax(price, tax) {
    if (typeof price !== 'number') {
      return 'Price harus dalam angka';
    }
  
    if (typeof tax !== 'number') {
      return 'Pajak harus dalam angka';
    }
  
    const totalSales = price;
    const taxAmount = (price * tax) / 100;
    const totalWithTax = Math.ceil(price + taxAmount);
  
    return `Total Sales: Rp.${price}\nPajak: ${tax}\nTotal Harga + Pajak: Rp.${totalWithTax}`;
  }
  
  console.log(getSalesTax("a", 1));           // Price harus dalam angka
  console.log(getSalesTax(500, "pajak"));     // Price & Pajak harus dalam angka
  console.log(getSalesTax("harga", "pajak")); // Pajak harus dalam angka
  console.log(getSalesTax(4500, 0.5));
  