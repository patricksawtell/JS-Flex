const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	console.log('hello');
	this.classList.toggle('open');
}

function toggleActive(e) {
	console.log(e.propertyName);
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //listen for a click on each panel and run toggleOpen
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); //when finished toggle openActive

