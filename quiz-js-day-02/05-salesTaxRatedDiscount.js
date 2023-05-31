function getSalesDiscount(price, tax, discount) {
    if (typeof price !== 'number') {
      return 'Price harus dalam angka';
    }
  
    if (typeof tax !== 'number') {
      return 'Pajak harus dalam angka';
    }
  
    if (typeof discount !== 'number') {
      return 'Discount harus dalam angka';
    }
  
    const totalSales = price;
    const discountAmount = (price * discount) / 100;
    const priceAfterDiscount = price - discountAmount;
    const taxAmount = (priceAfterDiscount * tax) / 100;
    const totalPayment = priceAfterDiscount + taxAmount;
  
    return `Total Sales: Rp.${price}\nDiscount (${discount}%): Rp.${discountAmount}\nPrice After Discount: Rp.${priceAfterDiscount}\nPajak (${tax}%): Rp.${taxAmount}\n----------------------------------\nTotal Payment: Rp.${totalPayment}`;
  }
  
  console.log(getSalesDiscount("a", 1, 5));           // Price harus dalam angka
  console.log(getSalesDiscount(500, "pajak", 5));     // Pajak harus dalam angka
  console.log(getSalesDiscount("harga", "pajak", "discount")); // Price, Tax & Discount harus dalam angka
  console.log(getSalesDiscount(4500, 10, 5));
  