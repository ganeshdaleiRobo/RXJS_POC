export const INITIAL_DATA = [{ type: "var", data: "sdsds" }];

export const UpdateInitalData = (input) => {
  if (input.value == undefined || input.value == "") {
    INITIAL_DATA.push({ [input.key]: undefined });
  } else {
    INITIAL_DATA.push({ type: input.type, [input.key]: input.value });
  }

  console.log("INITIAL_DATA>>", INITIAL_DATA)
};
