const capitalize = (str) => {
  if (/^\d$/.test(str.charAt(0))) {
    return 'Invalid format';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = capitalize;
