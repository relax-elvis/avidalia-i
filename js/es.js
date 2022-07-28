function f_scroll() {
	const header = document.querySelector('header');
	window.addEventListener('scroll', function(e) {
		var scroll_top = this.scrollY;

		if(scroll_top < 200) {
			header.classList.remove('fixed');
		} else {
			header.classList.add('fixed');
		}
	});
		

}
f_scroll();

const btn = document.querySelector('.btn-check input[type=checkbox]');
const body = document.querySelector('body');
btn.addEventListener('change', function(event) {
	const _this = event.target;
	if(body.classList.contains('overflow')) {
		body.classList.remove('overflow');
		body.style.overflowY = 'auto';
	} else {
		body.classList.add('overflow');
		body.style.overflowY = 'hidden';
	}
})