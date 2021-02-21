let originX = "";
let originY = "";
let endX = "";
let endY = "";

window.addEventListener("mousemove", (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
});
window.addEventListener("click", (event) => {
  let startX = event.clientX;
  let startY = event.clientY;
  originX === "" ? (originX = +startX) : (endX = startX);
  originY === "" ? (originY = startY) : (endY = startY);
  if (originX !== "" && endX !== "") creatingDiv();
});
// function creatingDiv(x, y, startX, startY){
// 	let e = document.createElement("div");
// 	let body = document.querySelector("body");
// 	body.appendChild(e);
// 	e.style.width = startX - x;
// 	e.style.height = startY - y;
// }
function creatingDiv() {
  let width = endX - originX;
  let height = endY - originY;
  console.log(width, height);
  let app = document.querySelector("#app");
  let box = document.createElement("div");
  app.appendChild(box);
  box.style.width = width;
  box.style.height = height;
  box.style.border = "1px solid #000";
  box.style.position = "absolute";
  box.style.left = originX;
  box.style.top = originY;
  originX = "";
  originY = "";
  endX = "";
  endY = "";
}
