export const INITIAL_DATA = [{ type: "var", data: "sdsds" }];

export const UpdateInitalData = (input) => {
  if (input.value == undefined || input.value == "") {
    INITIAL_DATA.push({ [input.key]: undefined });
  } else {
    INITIAL_DATA.push({ type: input.type, [input.key]: input.value });
  }

  console.log("INITIAL_DATA>>", INITIAL_DATA);
};

export const retrieveDataFromInitalData = (key) => {
  var value = "";
  for (var i = 0; i < INITIAL_DATA.length; i++) {
    if (Object.keys(INITIAL_DATA[i] == [new String(key)])) {
      value = INITIAL_DATA[i][new String(key)];
    }
  }
  return value;
};

export const _getDataFromObject = (object, key)=> {
  var value = "";
  for (var i = 0; i < object.length; i++) {
    value = object[i][new String(key.key)];
  }
  return value;
}