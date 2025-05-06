
let mode = "light";

function toggleMode(currentMode) {
  let mode;
  if (currentMode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  console.log("variavel local dentro da função:", mode);
  return mode;
}

console.log("variavel global antes da função):", mode);
mode = toggleMode(mode);
console.log("variavel global depois da função:", mode);

mode = toggleMode(mode);
console.log("variavel global depois da segunda chamada:", mode);