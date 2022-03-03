const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const newsContainer = document.getElementById('news');

setTimeout(showPopup, 5000);

openBtn.addEventListener('click', () => {
	showPopup()
});

closeBtn.addEventListener('click', () => {
	hidePopup()
});

function showPopup() {
	newsContainer.classList.add('show');
	openBtn.classList.add('hidden');
}

function hidePopup() {
	newsContainer.classList.remove('show');
	openBtn.classList.remove('hidden');
}