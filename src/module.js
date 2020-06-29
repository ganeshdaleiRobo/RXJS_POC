import { checkVariavleType, isCompareKeyAndType } from "./typeCheck";
import { INITIAL_DATA, UpdateInitalData } from "./consoleObject";
import { ErrorRender, renderDataToUI } from "./render";
export const Module = (function () {
  "use strict";
  var isError = false;
  function _refactorObject(Obj) {
    switch (isCompareKeyAndType(INITIAL_DATA, Obj)) {
      case true:
        ErrorRender(
          "SyntaxEUncaught SyntaxError: Please Check variable declared"
        );
        isError = true;
        break;
      case false:
        UpdateInitalData(Obj);
        isError = false;
        break;
      default:
    }
  }
  function removeWhiteSpace(str) {
    return String(str).replace(/\s+/g, "");
  }
  function _getKeyFromObject(inputData) {
    var leftHandSide = String(inputData).split("=")[0].replace(/\s+/g, "");
    var rightHandSide = String(inputData).split("=")[1];
    return {
      key: leftHandSide,
      value: rightHandSide,
    };
  }
  function createObject(inputData) {
    _typeCheck(removeWhiteSpace(inputData));
  }

  function _typeCheck(str) {
    switch (checkVariavleType(str)) {
      case "var":
        var obj = _getKeyFromObject(String(str).splitByIndex(3)[1]);
        obj.type = String(str).splitByIndex(3)[0];
        _refactorObject(obj);
        break;
      case "let":
        var obj = _getKeyFromObject(String(str).splitByIndex(3)[1]);
        obj.type = String(str).splitByIndex(3)[0];
        _refactorObject(obj);
        break;
      case "const":
        var obj = _getKeyFromObject(String(str).splitByIndex(5)[1]);
        obj.type = String(str).splitByIndex(5)[0];
        _refactorObject(obj);
        break;
      default:
        var obj = _getKeyFromObject(str);
        _refactorObject(obj);
    }
  }

  function clearInputText(element) {
    element.value = "";
  }
  function clearConsoleText(ele) {
    var ele = document.getElementById(ele);
    while (ele.childElementCount > 0) {
      ele.removeChild(ele.lastElementChild);
    }
  }
  function _getDataFromObject(object, key) {
    var value = "";
    for (var i = 0; i < object.length; i++) {
      value = object[i][new String(key.key)];
    }
    return value;
  }
  const receiveObserData = (receiveData) => {
    var removeSpace = String(removeWhiteSpace(receiveData));
    var temp = String(removeSpace).splitByIndex(
      checkVariavleType(removeSpace).length
    )[1];
    var obj = _getKeyFromObject(temp);
    var str = receiveData + ":" + obj.value;
    !isError ? renderDataToUI(str) : "";
    console.log(obj);
  };
  return {
    setData: createObject,
    initialData: INITIAL_DATA,
    addToObservable: receiveObserData,
    clear: clearInputText,
    getDataFromObject: _getDataFromObject,
    convertStringToObjectKey: _getKeyFromObject,
  };
})();
