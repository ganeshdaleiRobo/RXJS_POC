String.prototype.splitByIndex = function (index) {
  var str = "";
  var substr = "";
  var temp = [];
  for (var i = 0; i < index; i++) {
    str += this[i];
  }
  substr = this.substring(index, this.length);
  temp.push(str, substr);
  return temp;
};
