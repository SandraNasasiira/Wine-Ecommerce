const hammenu = document.querySelector('.headers .navigate .navbar-list .hammenu');
const mobile_menu = document.querySelector('.headers .navigate .navbar-list ul');
const menu_item = document.querySelectorAll('.headers .navigate .navbar-list ul li a');
const headers = document.querySelector('.headers.container');

hammenu.addEventListener('click', () => {
	hammenu.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 200) {
		headers.style.backgroundColor = '#bda87f';
	} else {
		headers.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hammenu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
