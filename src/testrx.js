import { Observable, fromEvent } from "rxjs";
import { map, reduce, filter } from "rxjs/operators";
import {addToObservable,clear} from './store';

let Input = document.getElementById("text-input");
var obser = Observable.create((observer) => {
  observer.next();
});

Input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
   obser.pipe(map((data) =>{
     return Input.value
    }))
   .subscribe(addToObservable);
    clear(Input);
  }
  console.log(obser)
});
