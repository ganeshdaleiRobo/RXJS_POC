import { VARIABLE_TYPE,FUNCTIONS_TYPE } from "./types";
export const checkVariavleType = function (str) {
  var result = "";
  for (var i = 0; i < VARIABLE_TYPE.length; i++) {
    if (
      VARIABLE_TYPE[i] === String(str).splitByIndex(VARIABLE_TYPE[i].length)[0]
    ) {
      result = VARIABLE_TYPE[i];
    }
  }
  return result;
};

export const isCompareKeyAndType = function (_store, inputObject) {
  var iskeyInObject = false;
  for (var i = 0; i < _store.length; i++) {
    if (
      Object.keys(_store[i])[1] == inputObject.key &&
      _store[i].type != inputObject.type
    ) {
      iskeyInObject = true;
    }
  }
  return iskeyInObject;
};

export const checkFunctionType = function (str) {
  var result = "";
  for (var i = 0; i < FUNCTIONS_TYPE.length; i++) {
    if (
      FUNCTIONS_TYPE[i] === String(str).splitByIndex(FUNCTIONS_TYPE[i].length)[0]
    ) {
      result = FUNCTIONS_TYPE[i];
    }
  }
  return result;
};