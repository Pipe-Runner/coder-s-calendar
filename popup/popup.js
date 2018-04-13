console.log("Main script loaded");
// loading var set to true by default

const refresh = () => {
	loading = true;
	codeforcesApiCall();
}

// binding functions to elements
document.getElementById('refresh').addEventListener('click', refresh);