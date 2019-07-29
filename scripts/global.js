function headerResize() {
	var content = document.querySelector("div.header");
	var displayWidth = window.innerWidth * 727/1920;
	content.style.height = displayWidth.toString() + "px";
}