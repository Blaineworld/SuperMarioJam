'use strict';

let resizing = false;
function resize() {
	if (!resizing) {
		resizing = true;
		setTimeout(resizer, 2);
	}
}
function resizer() {
	resizing = false;

	let x = Math.min(innerWidth / C.width, innerHeight / C.height);
	if (!(pixelation.disabled = x <= 1 / devicePixelRatio))
		x = Math.floor(x * devicePixelRatio) / devicePixelRatio;

	C.style.height = C.height * x + "px";
	C.style.width = C.width * x + "px";
}
resize();
addEventListener("resize", resize);

const c = C.getContext("2d");
c.imageSmoothingEnabled = false;