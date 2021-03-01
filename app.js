function all(app) {
  let originY = "";
  let originX = "";
  let endX = "";
  let endY = "";
  let startX = "";
  let startY = "";

app.onclick = function (event) {
	startX = event.clientX;
	startY = event.clientY;
	originX === "" ? (originX = startX) : (endX = startX);
	originY === "" ? (originY = startY) : (endY = startY);
	if (originX !== "" && endX !== "") creatingDiv();
  };

  function creatingDiv() {
    let width = endX - originX;
    let height = endY - originY;
    let box = document.createElement("div");
    box.className = "box";
    box.style.width = width;
    box.style.height = height;
    box.style.position = "absolute";
    box.style.left = originX;
    box.style.top = originY;
    app.appendChild(box);
    originX = "";
    originY = "";
    endX = "";
    endY = "";
  }
}
