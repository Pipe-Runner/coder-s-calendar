// loading data in menu-2
const populateMenu2 = (siteType) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	switch (siteType) {
		case "CODEFORCES":
			let innerHTML = "";
			contestList.codeforces.map(item => {

				console.log(item);

				innerHTML +=
					`<div class="contest-details-card z-depth-1">
						<div class="contest-status">
						<a class="btn-floating btn-large waves-effect waves-light ${item.status === "ONGOING" ? 'green' : 'red'}"><i class="material-icons">${item.status === "ONGOING" ? 'play_arrow' : 'access_alarm'}</i></a>
						</div>
						<div class="contest-details-wrapper">
							<div class="contest-details-name">${item.name}</div>
							<div class="contest-details-time-wrapper">
								<div class="contest-details-date"><b>Start: </b>${item.startTime}</div>
								<div class="contest-details-date"><b>End: </b>${item.endTime}</div>
								<div class="contest-details-duration"><b>Duration: </b>${item.duration}</div>
							</div>
						</div>
						<div class="spacer"></div>
					</div>
				  `
			});
			document.getElementById('contest-details').innerHTML = innerHTML;
			break;

		default:
			break;
	}
}