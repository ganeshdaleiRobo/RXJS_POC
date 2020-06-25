export const addToObservable = (value)=> {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    var ele = document.getElementById("render");
    ele.appendChild(node);
  }
  export const clear = (element)=>{
    element.value="";
  }