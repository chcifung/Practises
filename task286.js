function telephoneCheck(str) {
  // Good luck!
  var reg = /^(1?)\s?(\d{3}-?|\(\d{3}\))\s?\d{3}-?\s?\d{4}$/i;
  return reg.test(str);
}