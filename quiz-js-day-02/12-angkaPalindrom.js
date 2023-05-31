function isPalindrome(angka) {
    if (isNaN(angka)) {
      return `${angka} is not a number`;
    }
  
    const str = angka.toString();
    const len = str.length;
  
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        return `${angka} is not a palindrome`;
      }
    }
  
    return `${angka} is a palindrome`;
  }
  
  console.log(isPalindrome("abcd")); // Output: abcd is not a number
  console.log(isPalindrome("123a")); // Output: 123a is not a number
  console.log(isPalindrome("1234")); // Output: 1234 is not a palindrome
  console.log(isPalindrome(1221)); // Output: 1221 is a palindrome
  console.log(isPalindrome("8888")); // Output: 8888 is a palindrome
  