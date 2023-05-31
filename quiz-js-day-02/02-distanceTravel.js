function calculateDistance(a, t) {
    if (typeof a !== 'number' || typeof t !== 'number') {
      return 'Input must be a number';
    }
  
    if (a < 0 || t < 0) {
      return 'Acceleration or time must be >= 0';
    }
  
    const distance = 0.5 * a * Math.pow(t, 2);
    return `Jarak yang ditempuh adalah ${distance} meter/s`;
  }
  
  console.log(calculateDistance("a", "t")); // Input must be a number
  console.log(calculateDistance(-1, 9));   // Acceleration or time must be >= 0
  console.log(calculateDistance(50, 60));  // Jarak yang ditempuh adalah 90000 meter/s
  
