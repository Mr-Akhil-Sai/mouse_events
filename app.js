window.addEventListener("mousemove", (event)=>{
	let x = event.offsetX;
	let y = event.offsetY;
});
window.addEventListener("click", (event) => {
	let startX = event.clientX;
	let startY = event.clientY;
	creatingDiv(startX, startY);
});
function creatingDiv(x, y, startX, startY){
	let e = document.createElement("div");
	let body = document.querySelector("body");
	body.appendChild(e);
	e.style.width = startX - x;
	e.style.height = startY - y;
}
