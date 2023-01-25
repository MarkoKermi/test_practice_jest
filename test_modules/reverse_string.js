const reverseString = (r_str) => {
  if (r_str.length > 0) {
    return r_str.split('').reverse().join('');
  }
  return "The string is empty it can't be reversed";
};

module.exports = reverseString;
