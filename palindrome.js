function isPalindrome(x) {
  const array = Number(String(x).split("").reverse().join(""));

  return array === x;
}

console.log(isPalindrome(1111));
