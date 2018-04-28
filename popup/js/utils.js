const trim = (text, length = 25) => {
	if (text.length > length) {
		return text.substring(0, length) + "..."
	}
	else {
		return text;
	}
}

// listner stack
let elementList = []

const openNewUrl = (url) => () => {
	browser.tabs.create(
		{
			url: url
		}
	)

}

const destroyLinks = () => {
	elementList.map(item => {
		item.removeEventListener("click", openNewUrl)
	})
	elementList = []
}

const addLink = (id, url) => {
	const statusButton = document.getElementById(id);
	const clicklistener = statusButton.addEventListener('click', openNewUrl(url))
	elementList = [...elementList, statusButton];
}