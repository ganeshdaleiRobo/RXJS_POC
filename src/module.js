export const Module = (function () {
  "use strict";
  var _storeData = [{ data: "sdsds" }];
  function _refactorObject(left, right) {
    if (right == undefined || right == "") {
      _storeData.push({ [left]: undefined });
    } else {
      _storeData.push({ [left]: right });
    }
  }
  function removeWhiteSpace(str) {
    return String(str).replace(/^\s+|\s+$/gm, "");
  }

  function _getKeyFromObject(inputData) {
    var leftHandSide = String(inputData)
      .split("=")[0]
      .replace(/^\s+|\s+$/gm, "");
    var rightHandSide = String(inputData).split("=")[1];
    return {
      key: leftHandSide,
      value: rightHandSide,
    };
  }
  function createObject(inputData) {
    switch (inputData) {
      case "clear":
        clearConsoleText("render");
        break;
      default:
        var getData = _getKeyFromObject(inputData);
        _refactorObject(getData.key, getData.value);
    }
  }
  function renderData(value) {
    var temp = String(value).split(":");
    for (var i = 0; i < temp.length; i++) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(temp[i]);
      node.appendChild(textnode);
      var ele = document.getElementById("render");
      ele.appendChild(node);
    }
  }
  function clearInputText(element) {
    element.value = "";
  }
  function clearConsoleText(ele){
  var ele = document.getElementById(ele);
    while (ele.childElementCount > 0) {
      ele.removeChild("li");
  }
  }
  function _getDataFromObject(object, key) {
    var value = "";
    for (var i = 0; i < object.length; i++) {
      value = object[i][new String(key.key)];
    }
    return value;
  }
  return {
    setData: createObject,
    initialData: _storeData,
    addToObservable: renderData,
    clear: clearInputText,
    getDataFromObject: _getDataFromObject,
    convertStringToObjectKey: _getKeyFromObject,
  };
})();
