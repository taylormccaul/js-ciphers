function rot13(str) {
str = str.toUpperCase();
let cipherString = ""
let strCharCode;
let nonAlph = /\W|_|\?|@|\s/;
  for (let index = 0; index < str.length; index++) {
    strCharCode = String.fromCharCode(str.charCodeAt(index) - 13);
    console.log(str.charCodeAt(index) - 13);

    if (str[index].match(nonAlph)) {
      cipherString += str[index];
      continue;
    }

    if (str.charCodeAt(index) === 32) {
      cipherString += str[index].trim();
    } else if (strCharCode < 65) {
      cipherString += String.fromCharCode(str.charCodeAt(index) + 13);
    } else if (str.charCodeAt(index) >= 71 && str.charCodeAt(index) <= 77) {
      cipherString += String.fromCharCode(str.charCodeAt(index) + 13);
    }
      else if (strCharCode > 90) {
      cipherString += String.fromCharCode(str.charCodeAt(index) - 12)
    }
      else {
      cipherString += strCharCode;
    }
  }
  return cipherString;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
