function fareinheitToKelvin(fahrenheit) {
    if (typeof fahrenheit !== 'number') {
      return 'Fahrenheit must be a number';
    }
  
    const kelvin = Math.round((fahrenheit + 459.67) / 1.8);
    return `Fahrenheit ${fahrenheit} to Kelvin = ${kelvin}`;
  }
  
  console.log(fareinheitToKelvin(45));  
  console.log(fareinheitToKelvin(1));  
  console.log(fareinheitToKelvin("F")); 
  