document.addEventListener('DOMContentLoaded', () => {
	headerListeners();
	addGlobalListeners();
});


function headerListeners() {
	const items = document.querySelectorAll('#content > .main-header .items > *:not(.active)');
	items.forEach(item => {
		item.addEventListener('click', () => {
			const route = item.getAttribute('href');
			document.location.pathname = route;
		});
	});
}


function addGlobalListeners() {
	window.storage.on('CHANGE-VIEW', (action) => {
		document.location.pathname = action.data;
	})
}
