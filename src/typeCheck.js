var AllType = ["var", "let", "const"];
export const checkDataType = function (str) {
  var result = "";
  for (var i = 0; i < AllType.length; i++) {
    if (AllType[i] === String(str).splitByIndex(AllType[i].length)[0]) {
      result = AllType[i];
    }
  }
  return result;
};
