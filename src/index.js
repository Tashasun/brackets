module.exports = function check(str, bracketsConfig) {
  // const check = (str, bracketsConfig) => {
  l = bracketsConfig.length;
  long = str.length;
  for (let k = 0; k < long; k++) {
    str = str.replace(" ", "");
    for (let i = 0; i < l; i++) {
      let left = "";
      let right = "";
      change = `${bracketsConfig[i][0]}` + `${bracketsConfig[i][1]}`;
      str = str.replace(change, "");
      // console.log(change,str);
    }
  }
  if (str == "") {
    return true;
  }
  return false;
};

// console.log(
//   check("{,[     ]()  }", [['(', ')'], ['[', ']']])
// );
