var jsSHA = require('jssha');

const getSignature = (joinStr) => {
  var shaObj = new jsSHA(joinStr, 'TEXT');
  var accKey = new jsSHA(spotAccountKey, 'TEXT').getHash('SHA-1', 'B64');
  var hmac = shaObj.getHMAC(accKey, 'TEXT', 'SHA-1', 'HEX');
  return hmac;
};

const getUniqueID = () => {
  // always start with a letter (for DOM friendlyness)
  var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
  do {
    // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
    var ascicode = Math.floor((Math.random() * 42) + 48);
    if (ascicode < 58 || ascicode > 64) {
      // exclude all chars between : (58) and @ (64)
      idstr += String.fromCharCode(ascicode);
    }
  } while (idstr.length < 32);
  return idstr;
};

export default {
  getSignature,
  getUniqueID,
};