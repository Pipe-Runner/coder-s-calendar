const fetchAllApiCall = () => {
	var codeforcesApi = new XMLHttpRequest();
	codeforcesApi.open('GET', 'https://contesttrackerapi.herokuapp.com/');
	codeforcesApi.onload = function () {
		if (codeforcesApi.status === 200) {
			loading(false);
			const responseObject = JSON.parse(codeforcesApi.response);
			updateData(responseObject.result);
		}
		else {
			alert('Error ' + codeforcesApi.status);
		}
	};

	codeforcesApi.send();
}