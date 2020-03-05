module.exports = function check(str, bracketsConfig) {
  let bracketsString = '';
  let emptyString = '';
  bracketsConfig.forEach(element => {
    bracketsString += element.join('');
  });
  for (let i = 0; i < str.length; i++) {
    if (bracketsString.indexOf(str[i]) % 2 == 0) {
      if (emptyString[emptyString.length - 1] == str[i] && bracketsString[bracketsString.indexOf(str[i])] == bracketsString[bracketsString.indexOf(str[i]) + 1]) {
        emptyString = emptyString.slice(0, -1);
      }
      else {
        emptyString += str[i];
      }
    }
    else {
      if (bracketsString.indexOf(emptyString[emptyString.length - 1]) == bracketsString.indexOf(str[i]) - 1) {
        emptyString = emptyString.slice(0, -1);
      }
      else {
        return false;
      }
    }
  }
  if (emptyString.length > 0) {
    return false;
  }
  else {
    return true;
  }
}
