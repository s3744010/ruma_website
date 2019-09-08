function headerResize() {
	var content = document.querySelector(".intro");
	var displayWidth = window.innerWidth * 145/1920;
	content.style.height = displayWidth.toString() + "vh";
}

function showText(n, size) {
	var status = "less";
	var content = document.getElementsByClassName("paragraph").item(n);
	var readMore = content.innerHTML;
	var lessText = readMore.substr(0, size);
	function applyTextButton() {
		if (window.innerWidth < 767){
			if (status == "less") {
				content.innerHTML = lessText + "<a href='' class='read-more-link'><br>Show More</a>";
				var showMoreButton = document.querySelector("a.read-more-link");
				showMoreButton.addEventListener('click', showMore);
			} else {
				content.innerHTML = readMore + "<a href='' class='show-less-link'>Show Less</a>";
				var showLessButton = document.querySelector("a.show-less-link");
				showLessButton.addEventListener('click', showLess);
			}
		} else {
			content.innerHTML = readMore;
		}
            
		function showMore(e) {
			e.preventDefault();
			content.innerHTML = readMore + "<a href='' class='show-less-link'>Show Less</a>";
			var showLessButton = document.querySelector("a.show-less-link");
			showLessButton.addEventListener('click', showLess);
			status = "more";
		}
        
		function showLess(e) {
			e.preventDefault();	
			content.innerHTML = lessText + "<a href='' class='read-more-link'><br>Show More</a>";
			document.querySelector("a.read-more-link").addEventListener('click', showMore);
		status = "less";
		}
	}
	applyTextButton();
	window.addEventListener("resize", applyTextButton);
}

