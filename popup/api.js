// Ajax calls for code foreces
const codeforcesApiCall = () => {
	var codeforcesApi = new XMLHttpRequest();
	codeforcesApi.open('GET', 'http://codeforces.com/api/contest.list?gym=false');
	codeforcesApi.onload = function () {
		if (codeforcesApi.status === 200) {
			const contestList = JSON.parse(codeforcesApi.response);
			const filteredList = contestList.result.filter(item => item.phase === 'BEFORE')
			console.log(filteredList);
		}
		else {
			alert('Error ' + codeforcesApi.status);
		}
	};

	codeforcesApi.send();
}