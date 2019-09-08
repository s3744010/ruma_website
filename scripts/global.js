function headerResize() {
	var content = document.querySelector("header");
	var displayWidth = window.innerWidth * 100/1920;
	content.style.height = displayWidth.toString() + "vh";
}