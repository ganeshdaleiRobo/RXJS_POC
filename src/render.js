export const ErrorRender = (message) => {
  var ele = document.getElementById("error");
  var node = document.createElement("LI");
  var textnode = document.createTextNode(message);
  node.appendChild(textnode);
  ele.appendChild(node);
};

export const renderDataToUI = (value) => {
  var temp = String(value).split(":");
  for (var i = 0; i < temp.length; i++) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(temp[i]);
    node.appendChild(textnode);
    var ele = document.getElementById("render");
    ele.appendChild(node);
  }
};
