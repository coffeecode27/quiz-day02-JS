function getPeriodTimes(seconds) {
    if (isNaN(seconds)) {
      return 'Input is not a number';
    }
  
    if (seconds < 0) {
      return 'Input must be a positive number';
    }
  
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;
  
    return `${days} hari ${hours} jam ${minutes} menit ${remainingSeconds} detik`;
  }
  
  console.log(getPeriodTimes("700005A")); // Output: Input is not a number
  console.log(getPeriodTimes("700005")); // Output: 8 hari 2 jam 26 menit 45 detik
  