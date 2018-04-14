console.log("Main script loaded");

// turn loader on/off
const loading = (isLoading) => {
	document.getElementById('loading').style.display = isLoading ? "block" : "none";
}

// loading var set to true by default
const refresh = () => {
	loading(true);
	codeforcesApiCall();
}

// initializing data
refresh();

// binding refresh functions to element
document.getElementById('refresh').addEventListener('click', refresh);

// menu controls
let menu = 1;

const back = () => {
	console.log("hit");
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
			loadDataInMenu(siteType);
			break;
		default:
			break;
	}
}

document.getElementById('back').addEventListener('click', back);
document.getElementById('codeforces-main').addEventListener('click', changeMenu(2, "codeforces"));

// data structuring into object and badge setting
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

// loading data in menu-2
const loadDataInMenu = (siteType) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	switch (siteType) {
		case "codeforces":
			let innerHTML = "";
			data.codeforces.map(item => {
				startTime = new Date(item.startTimeSeconds * 1000);
				duration = new Date(item.durationSeconds * 1000);

				innerHTML +=
					`<a class="collection-item avatar">
						<i class="material-icons circle green">insert_chart</i>
						<span class="title">${item.name}</span>
						<p>${duration.getUTCHours()} hrs <br>
						${startTime.getDate()} ${months[startTime.getMonth()]} ${startTime.getFullYear()} ${startTime.getHours()}:${startTime.getMinutes()}
						</p>
			  		</a>`
			});
			document.getElementById('contest-details').innerHTML = innerHTML;
			break;

		default:
			break;
	}
}
