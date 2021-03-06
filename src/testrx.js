import { Observable} from "rxjs";
import { map, reduce, filter } from 'rxjs/operators';
let stop = document.getElementById("stop");
var obser = Observable.create((observer) => {
  setInterval(function () {
    observer.next("Hello");
  }, 2000);
});

var observable = obser.subscribe(addList);

stop.addEventListener("click", function () {
  observable.unsubscribe();
});

function addList(value) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(value);
  node.appendChild(textnode);
  var ele = document.getElementById("render");
  ele.appendChild(node);
}
