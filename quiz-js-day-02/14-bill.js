function totalGaji(gaji1, gaji2, gaji3) {
    const pajak1 = taxGaji(gaji1);
    const pajak2 = taxGaji(gaji2);
    const pajak3 = taxGaji(gaji3);
  
  function taxGaji(gaji) {
    if (gaji >= 10000) {
      return (10 / 100);
    } else if (gaji >= 1000 && gaji < 10000) {
      return (5 / 100);
    } else if (gaji >= 100 && gaji < 1000) {
      return (2 / 100);
    }
  }
    const total1 = gaji1 + (gaji1 * pajak1);
    const total2 = gaji2 + (gaji2 * pajak2);
    const total3 = gaji3 + (gaji3 * pajak3);
  
    const totalGaji = total1 + total2 + total3;
  
    return `Total gaji yang harus dibayar:
    Emp1: Rp.${total1.toFixed(2)}
    Emp2: Rp.${total2.toFixed(2)}
    Emp3: Rp.${total3.toFixed(2)}
    Total: Rp.${totalGaji.toFixed(2)}`;
  }
  
  console.log(totalGaji(500, 2000, 12000));
  