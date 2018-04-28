// loading datbutton id="${item.name}" in menu-2
const populateMenu2 = (siteType) => {
	let innerHTML = "";

	// destroy previous hyperlinks
	destroyLinks()

	switch (siteType) {
		case "CODEFORCES":
			contestList.codeforces.map(item => {

				innerHTML +=
					`<div class="contest-details-card z-depth-1">
						<div style="background-image: url('../../icons/cardbackground_1.jpg');" class="contest-details-card-cover">
							<div class="contest-status">
								<button id="${item.name}" class="btn-floating btn-large waves-effect waves-light ${item.status === "ONGOING" ? 'green' : 'red'}">
									<i class="material-icons">
										${item.status === "ONGOING" ? 'play_arrow' : 'access_alarm'}
									</i>
								</button>
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
					</div>
				  `
			});
			document.getElementById('contest-details').innerHTML = innerHTML;

			// adding links to status buttons
			contestList.codeforces.map(item => {
				addLink(item.name, item.url);
			})
			break;

		case "HACKERRANK":
			contestList.hackerrank.map(item => {

				innerHTML +=
					`<div class="contest-details-card z-depth-1">
						<div style="background-image: url('../../icons/cardbackground_2.jpeg');" class="contest-details-card-cover">
							<div class="contest-status">
								<button id="${item.name}" class="btn-floating btn-large waves-effect waves-light ${item.status === "ONGOING" ? 'green' : 'red'}">
									<i class="material-icons">
										${item.status === "ONGOING" ? 'play_arrow' : 'access_alarm'}
									</i>
								</button>
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
					</div>
				  `
			});
			document.getElementById('contest-details').innerHTML = innerHTML;

			// adding links to status buttons
			contestList.hackerrank.map(item => {
				addLink(item.name, item.url);
			})
			break;

		case "CODECHEF":
			contestList.codechef.map(item => {

				console.log(item);

				innerHTML +=
					`<div class="contest-details-card z-depth-1">
						<div style="background-image: url('../../icons/cardbackground_3.jpg');" class="contest-details-card-cover">
							<div class="contest-status">
								<button id="${item.name}" class="btn-floating btn-large waves-effect waves-light ${item.status === "ONGOING" ? 'green' : 'red'}">
									<i class="material-icons">
										${item.status === "ONGOING" ? 'play_arrow' : 'access_alarm'}
									</i>
								</button>
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
					</div>
				  `
			});
			document.getElementById('contest-details').innerHTML = innerHTML;

			// adding links to status buttons
			contestList.codechef.map(item => {
				addLink(item.name, item.url);
			})
			break;

		case "HACKEREARTH":
			contestList.hackerearth.map(item => {

				innerHTML +=
					`<div class="contest-details-card z-depth-1">
						<div style="background-image: url('../../icons/cardbackground_4.jpg');" class="contest-details-card-cover">
							<div class="contest-status">
								<button id="${item.name}" class="btn-floating btn-large waves-effect waves-light ${item.status === "ONGOING" ? 'green' : 'red'}">
									<i class="material-icons">
										${item.status === "ONGOING" ? 'play_arrow' : 'access_alarm'}
									</i>
								</button>
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
					</div>
				  `
			});
			document.getElementById('contest-details').innerHTML = innerHTML;

			// adding links to status buttons
			contestList.hackerearth.map(item => {
				addLink(item.name, item.url);
			})
			break;

		default:
			break;
	}
}