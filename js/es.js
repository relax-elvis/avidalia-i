function f_scroll() {
	const header = document.querySelector('header');
	const logo = document.querySelector('header .logotype img');
	const logoSrc = document.querySelector('header .logotype img').getAttribute("src");
	const logoDataSrc = document.querySelector('header .logotype img').getAttribute('data-fixed-src');
	window.addEventListener('scroll', function(e) {
		var scroll_top = this.scrollY;

		if(scroll_top < 200) {
			header.classList.remove('fixed');
			logo.setAttribute('src', logoSrc);
		} else {
			header.classList.add('fixed');
			logo.setAttribute('src', logoDataSrc);
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
});

const tab = document.querySelectorAll('.tab details summary');
const detail = document.querySelectorAll('.tab details');

tab.forEach(function(item) {
	item.addEventListener('click', function(e) {
		const _this = e.target.parentNode.parentNode;
		if(_this.getAttribute('open') == null) {
			for(let i = 0; i < detail.length; i++) {
				detail[i].removeAttribute('open');
			}
			_this.removeAttribute('open');
		}
	})
})

