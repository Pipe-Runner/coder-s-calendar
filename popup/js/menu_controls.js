// menu controls
let menu = 1;

const back = () => {
	menu--;
	changeMenu(menu)();
}

const changeMenu = (menuNumber, siteType = null) => () => {
	menu = menuNumber;
	switch (menu) {
		case 1:
			document.getElementById("back").style.display = "none";
			document.getElementById("menu-1").style.display = "block";
			document.getElementById("menu-2").style.display = "none";
			break;
		case 2:
			document.getElementById("back").style.display = "block";
			document.getElementById("menu-1").style.display = "none";
			document.getElementById("menu-2").style.display = "block";

			// paint menu-2
			populateMenu2(siteType);
			break;
		default:
			break;
	}
}