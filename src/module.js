import { combineAll } from "rxjs/operators";

export const Module = (function () {
  "use strict";
  var _storeData = [{ data: "sdsds" }];

  function _refactorObject(left, right) {
    if (right == undefined) {
      _storeData.push({ [left]: left });
    } else {
      _storeData.push({ [left]: right });
    }
  }
  function removeWhiteSpace(str) {
    return String(str).replace(/^\s+|\s+$/gm, "");
  }
  function _getKeyFromObject(inputData) {
    var leftHandSide = removeWhiteSpace(String(inputData).split("=")[0]);
    var rightHandSide = String(inputData).split("=")[1];
    return {
      key: leftHandSide,
      value: rightHandSide,
    };
  }
  function createObject(inputData) {
    var getData = _getKeyFromObject(inputData);
    _refactorObject(getData.key, getData.value);
  }
  function renderData(value) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    var ele = document.getElementById("render");
    ele.appendChild(node);
  }
  function clearInputText(element) {
    element.value = "";
  }
  function _getDataFromObject(obj, key) {
      //console.log(key)
      var value=[];
      console.log("}}}")
    for (var i = 0; i < obj.length; i++) {
      //  console.log(obj[i][])
    }
    console.log("????", value)
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
