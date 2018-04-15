// turn loader on/off
const loading = (isLoading) => {
	document.getElementById('loading').style.display = isLoading ? "block" : "none";
}

// loading var set to true by default
const refresh = () => {
	loading(true);
	fetchAllApiCall();
}

// data structuring into object and badge setting
let contestList = {
	"codeforces": [],
	"hackerearth": [],
	"codechef": [],
	"hackerrank": [],
	"topcoder": [],
	"other": []
}

const updateData = (apiResponse) => {

	// ongoing set of contests
	let ongoing = apiResponse.ongoing;

	// upcoming set of contests
	let upcoming = apiResponse.upcoming;

	ongoing.map(item => {
		switch (item.Platform) {
			case "CODEFORCES":
				contestList.codeforces = [
					...contestList.codeforces,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "ONGOING"
					}
				]
				break;
			case "HACKEREARTH":
				contestList.hackerearth = [
					...contestList.hackerearth,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "ONGOING"
					}
				]
				break;
			case "HACKERRANK":
				contestList.hackerrank = [
					...contestList.hackerrank,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "ONGOING"
					}
				]
				break;
			case "CODECHEF":
				contestList.codechef = [
					...contestList.codechef,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "ONGOING"
					}
				]
				break;
			case "TOPCODER":
				contestList.topcoder = [
					...contestList.topcoder,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "ONGOING"
					}
				]
				break;
			case "OTHER":
				contestList.other = [
					...contestList.other,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "ONGOING"
					}
				]
				break;
			default:
				break;
		}
	})

	upcoming.map(item => {
		switch (item.Platform) {
			case "CODEFORCES":
				contestList.codeforces = [
					...contestList.codeforces,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "UPCOMING"
					}
				]
				break;
			case "HACKEREARTH":
				contestList.hackerearth = [
					...contestList.hackerearth,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "UPCOMING"
					}
				]
				break;
			case "HACKERRANK":
				contestList.hackerrank = [
					...contestList.hackerrank,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "UPCOMING"
					}
				]
				break;
			case "CODECHEF":
				contestList.codechef = [
					...contestList.codechef,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "UPCOMING"
					}
				]
				break;
			case "TOPCODER":
				contestList.topcoder = [
					...contestList.topcoder,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "UPCOMING"
					}
				]
				break;
			case "OTHER":
				contestList.other = [
					...contestList.other,
					{
						name: item.Name,
						startTime: item.StartTime,
						endTime: item.EndTime,
						type: item.challenge_type,
						url: item.url,
						duration: item.Duration,
						status: "UPCOMING"
					}
				]
				break;
			default:
				break;
		}
	})

	// setting badge
	if (contestList.codeforces.length > 0) {
		document.getElementById("codeforces-badge").style.display = "block";
		document.getElementById("codeforces-badge").innerHTML = contestList.codeforces.length;
	}
	else {
		document.getElementById("codeforces-badge").style.display = "none";
	}

	if (contestList.codechef.length > 0) {
		document.getElementById("codechef-badge").style.display = "block";
		document.getElementById("codechef-badge").innerHTML = contestList.codechef.length;
	}
	else {
		document.getElementById("codechef-badge").style.display = "none";
	}

	if (contestList.hackerrank.length > 0) {
		document.getElementById("hackerrank-badge").style.display = "block";
		document.getElementById("hackerrank-badge").innerHTML = contestList.hackerrank.length;
	}
	else {
		document.getElementById("hackerrank-badge").style.display = "none";
	}

	if (contestList.hackerearth.length > 0) {
		document.getElementById("hackerearth-badge").style.display = "block";
		document.getElementById("hackerearth-badge").innerHTML = contestList.hackerearth.length;
	}
	else {
		document.getElementById("hackerearth-badge").style.display = "none";
	}
}