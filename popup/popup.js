console.log("Main script loaded");

const refresh = () => {
	codeforcesApiCall();
}

// binding functions to elements
document.getElementById('refresh').addEventListener('click', refresh);