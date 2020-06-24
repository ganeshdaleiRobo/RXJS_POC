import { Observable} from "rxjs";
import { map, reduce, filter } from 'rxjs/operators';
let stop = document.getElementById("stop");
let add = document.getElementById("add");
let Input = document.getElementById("text-input");
var obser = Observable.create((observer) => {
    observer.next("Hello");
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
add.addEventListener("click", function(){
 obser.pipe(
    map(data =>data+ Input.value)
  ).subscribe(addList)
  
  
})