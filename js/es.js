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
	scrollMenuMobile();
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

function scrollMenuMobile() {
	if(window.outerWidth < 767) {
		const heightMenu = document.querySelector('.btn-check .block-menu .max-width').offsetHeight;
		const scrollHeightMenu = document.querySelector('.btn-check .block-menu .max-width').scrollHeight;
		const resultScroll = scrollHeightMenu - heightMenu;
		document.querySelector('.btn-check .block-menu .max-width').scrollTo(0, -resultScroll);
	}
}

function bannerMenuMobile() {
	if(window.outerWidth < 1030) {

		if(document.querySelector('body.other .av_banner nav.banner-menu') !== null) {
			const text = document.querySelector('body.other .av_banner nav.banner-menu .link.active').innerText;
			document.querySelector('body.other .av_banner nav.banner-menu .page-now').innerText = text.trim();
			
			const mobileBmenu = document.querySelector('body.other .av_banner nav.banner-menu .mobile-bmenu');
			mobileBmenu.addEventListener('click', function(event) {
				const _this = event.currentTarget;
				if(_this.classList.contains('active')) {
					_this.classList.remove('active');
				} else {
					_this.classList.add('active');
				}
			});

			const mLink = document.querySelectorAll('nav.banner-menu .link');
			mLink.forEach(function(item) {
				item.addEventListener('click', function(event) {
					const _this = event.currentTarget;
					document.querySelector('body.other .av_banner nav.banner-menu .link.active').classList.remove('active');
					_this.classList.add('active');

					let text = _this.innerText;
					
					document.querySelector('body.other .av_banner nav.banner-menu .page-now').innerText = text.trim();
					mobileBmenu.classList.remove('active');
				})
			})
		}
	}
}
bannerMenuMobile();

function seoPageImageLeft() {
	if(window.outerWidth > 1500) {
		if(document.querySelector('body.other .av_hacemos .block-image') !== null && document.querySelector('body.other .av_hacemos .block-image') !== null) {
			const left = document.querySelector('body.other .av_hacemos .block-image').offsetLeft;
			const width = document.querySelector('body.other .av_hacemos .block-image').offsetWidth;
			const windowWidth = window.innerWidth;
			const result = windowWidth - (left + width);
			document.querySelector('body.other .av_hacemos .block-image').style.marginRight = -result + 'px';
		}
		
	}
}
seoPageImageLeft();

if(window.outerWidth > 1500) {
	window.addEventListener('resize', function(e) {
		const leftBlock = document.querySelector('.av_command-result .max-width-title');
		if(leftBlock !== null) {
			const margLeft = window.getComputedStyle(document.querySelector('.av_command-result__list'));
			const res = leftBlock.offsetLeft - (parseFloat(margLeft.marginLeft.replace('px', '')) + parseFloat(margLeft.paddingLeft.replace('px', '')));
			console.log('res', (parseFloat(margLeft.marginLeft.replace('px', '')) + parseFloat(margLeft.paddingLeft.replace('px', ''))));
			document.querySelector('.av_command-result__list .item').style.paddingLeft = res + 'px';
			
		}
	})
}
