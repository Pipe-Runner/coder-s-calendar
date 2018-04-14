console.log("Main script loaded");
// loading var set to true by default
const refresh = () => {
	loading = true;
	codeforcesApiCall();
}

refresh();

// binding functions to elements
document.getElementById('refresh').addEventListener('click', refresh);

// menu control vars
let menu = 1;

const back = () => {
	console.log("hit");
	menu--;
	changeMenu(menu)();
}

const changeMenu = (menuNumber) => () => {
	menu = menuNumber;
	switch (menu) {
		case 1:
			document.getElementById("back").style.display = "none";
			document.getElementById("menu-1").style.display = "block";
			break;
		case 2:
			document.getElementById("back").style.display = "block";
			document.getElementById("menu-1").style.display = "none";
			break;
		default:
			break;
	}
}

document.getElementById('back').addEventListener('click', back);
document.getElementById('codeforces-main').addEventListener('click', changeMenu(2));

// data displaying
let data = {
	"codeforces": []
}

const updateData = (key, list) => {
	data[key] = list;

	// setting badge
	if (data.codeforces.length > 0) {
		document.getElementById("codeforcesBadge").style.display = "block";
		document.getElementById("codeforcesBadge").innerHTML = data.codeforces.length;
	}
	else {
		document.getElementById("codeforcesBadge").style.display = "none";
	}
}
