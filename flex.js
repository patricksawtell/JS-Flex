const panels = document.querySelectorAll('.panels');

function toggleOpen() {
	console.log('hello');
	this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

