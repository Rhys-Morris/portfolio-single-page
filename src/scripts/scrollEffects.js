// ----- HTML ELEMENTS -----

const navBar = document.querySelector('.nav');
const header = document.querySelector('header');
const scrollIcon = document.querySelector('.hero__scroll-down')
const sections = document.querySelectorAll('section')

// Debounce to prevent extraneous calls on scroll
function debounce(func, wait = 5, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// ----- NAV BAR APPEAR ON SCROLL UP -----

previousPosition = 0;

window.addEventListener('scroll', debounce((e) => {
    
    if (window.scrollY > 0) {
        if (screen.width > 500) {
            navBar.classList.add('fadeUp');
            header.style.height = '10vh';
        }
        scrollIcon.classList.add('hidden');
    }

    if (window.scrollY == 0) {
        if (screen.width > 500) {
            navBar.classList.remove('fadeUp'); 
            navBar.classList.remove('sticky');
        }
        scrollIcon.classList.remove('hidden');
    }

    console.log(sections[1].offsetHeight);

    sections.forEach(section => {
        if ((window.scrollY + window.innerHeight) > (section.offsetTop + (section.offsetHeight * .5))) {
            section.classList.remove('fade-in')
        }
    })

    // Drop nav back in
    if (window.scrollY < previousPosition && screen.width > 500) {
        navBar.classList.add('sticky');
        navBar.classList.remove('fadeUp');
    }

    // Remove nav
    if (window.scrollY > previousPosition && screen.width > 500 ) {
        navBar.classList.remove('sticky');
        navBar.classList.add('fadeUp');
    }

    previousPosition = window.scrollY;
}))
