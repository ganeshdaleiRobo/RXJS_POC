import { checkDataType } from "./typeCheck";
export const Module = (function () {
  "use strict";
  var _storeData = [{type: "var", data: "sdsds" }];
  function _refactorObject(Obj) {
    console.log("?>>>>>",Obj)
    if (Obj.value == undefined || Obj.value == "") {
      _storeData.push({[Obj.key]: undefined});
    } else {
      _storeData.push({type:Obj.type,[Obj.key]: Obj.value });
    }
  }
  function removeWhiteSpace(str) {
    return String(str).replace(/\s+/g, "");
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
    _typeCheck(removeWhiteSpace(inputData));
    var getData = _getKeyFromObject(inputData);
   // _refactorObject(getData.key, getData.value);
  }

  function _typeCheck(str) {
    switch (checkDataType(str)) {
      case "var":
        var obj = _getKeyFromObject(String(str).splitByIndex(3)[1]);
        obj.type = String(str).splitByIndex(3)[0];
        _refactorObject(obj)
        break;
      case "let":
        console.log("let>>");
        break;
      case "const":
        console.log("const>>>");
        break;
      default:
        console.log("default");
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
  return {
    setData: createObject,
    initialData: _storeData,
    addToObservable: renderData,
    clear: clearInputText,
    getDataFromObject: _getDataFromObject,
    convertStringToObjectKey: _getKeyFromObject,
  };
})();
