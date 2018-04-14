// Ajax calls for code foreces
const codeforcesApiCall = () => {
	var codeforcesApi = new XMLHttpRequest();
	codeforcesApi.open('GET', 'http://codeforces.com/api/contest.list?gym=false');
	codeforcesApi.onload = function () {
		if (codeforcesApi.status === 200) {
			loading(false);
			const contestList = JSON.parse(codeforcesApi.response);
			const filteredList = contestList.result.filter(item => item.phase === 'BEFORE')
			console.log(filteredList);
			updateData("codeforces", filteredList.reverse());
		}
		else {
			alert('Error ' + codeforcesApi.status);
		}
	};

	codeforcesApi.send();
}