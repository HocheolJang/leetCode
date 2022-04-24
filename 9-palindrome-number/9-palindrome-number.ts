function isPalindrome(x: number): boolean {
  let answer;
  let strX = x.toString();
  let s = x.toString().split('').reverse().join('')
  if(s === strX) {
    return true;
  }
  return false;
};