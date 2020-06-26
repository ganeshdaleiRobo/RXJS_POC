import { Observable, fromEvent } from "rxjs";
import { map, reduce, filter } from "rxjs/operators";
import { Module } from "./module";

let Input = document.getElementById("text-input");
var obser = Observable.create((observer) => {
  observer.next(Module.initialData);
});

fromEvent(Input, "keydown").subscribe((event) => {
  if (event.key === "Enter") {
    let inputData = event.target.value;
    Module.setData(inputData)
    obser
      .pipe(
        map((data) => {
       console.log(Module.getDataFromObject(data,Module.convertStringToObjectKey(inputData)));
          return inputData
        })
      )
      .subscribe(Module.addToObservable);
      Module.clear(Input);
  }
});
