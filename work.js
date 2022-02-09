const tl1 = gsap.timeline({repeat:-1});
const tl2 = gsap.timeline({repeat:-1});
const tl3 = gsap.timeline({repeat:-1});
const tl4 = gsap.timeline({repeat:-1});

// Project 1 slider
tl1.from(".project-1", {duration: 1, opacity: 1});
tl1.to(".project-1", {duration: 1, opacity: 1}, "+=4");
tl1.from(".project-1-b", {duration: 1, opacity: 0});
tl1.to(".project-1-b", {duration: 1, opacity: 1}, "+=4");
tl1.from(".project-1-c", {duration: 1, opacity: 0});
tl1.to(".project-1-c", {duration: 1, opacity: 1}, "+=4");

// Fade secondary images for next loop
tl1.to(".project-1-b", {duration: 1, opacity: 0});
tl1.to(".project-1-c", {duration: 1, opacity: 0});

// Project 2 slider
tl2.from(".project-2", {duration: 1, opacity: 1});
tl2.to(".project-2", {duration: 1, opacity: 1}, "+=4");
tl2.from(".project-2-b", {duration: 1, opacity: 0});
tl2.to(".project-2-b", {duration: 1, opacity: 1}, "+=4");
tl2.from(".project-2-c", {duration: 1, opacity: 0});
tl2.to(".project-2-c", {duration: 1, opacity: 1}, "+=4");

// Fade secondary images for next loop
tl2.to(".project-2-b", {duration: 1, opacity: 0});
tl2.to(".project-2-c", {duration: 1, opacity: 0});

// Project 3 slider
tl3.from(".project-3", {duration: 1, opacity: 1});
tl3.to(".project-3", {duration: 1, opacity: 1}, "+=4");
tl3.from(".project-3-b", {duration: 1, opacity: 0});
tl3.to(".project-3-b", {duration: 1, opacity: 1}, "+=4");
tl3.from(".project-3-c", {duration: 1, opacity: 0});
tl3.to(".project-3-c", {duration: 1, opacity: 1}, "+=4");

// Fade secondary images for next loop
tl3.to(".project-3-b", {duration: 1, opacity: 0});
tl3.to(".project-3-c", {duration: 1, opacity: 0});

// Project 4 slider
tl4.from(".project-4", {duration: 1, opacity: 1});
tl4.to(".project-4", {duration: 1, opacity: 1}, "+=4");
tl4.from(".project-4-b", {duration: 1, opacity: 0});
tl4.to(".project-4-b", {duration: 1, opacity: 1}, "+=4");
tl4.from(".project-4-c", {duration: 1, opacity: 0});
tl4.to(".project-4-c", {duration: 1, opacity: 1}, "+=4");

// Fade secondary images for next loop
tl4.to(".project-4-b", {duration: 1, opacity: 0});
tl4.to(".project-4-c", {duration: 1, opacity: 0});

// let element = document.querySelector(".project-2");
// let elementHeight = element.clientHeight;

// document.addEventListener('scroll', animate);

// function inView() {
// 	let windowHeight = window.innerHeight;
// 	let scrollY = window.scrollY || window.pageYOffset;
// 	let scrollPosition = scrollY + windowHeight;
// 	let elementPosition = 
// 	element.getBoundingClientRect().top + scrollY +
// 	elementHeight;

// 	if (scrollPosition > elementPosition) {
// 		return true;
// 	} else
	
// 	return false;
// }

// function animate() {
// 	if (inView()) {
// 		const tl2 = gsap.timeline({});

// 		// Project 2 slider
// 		tl2.from(".project-2", {duration: 1, opacity: 1});
// 		tl2.to(".project-2", {duration: 1, opacity: 1}, "+=4");
// 		tl2.from(".project-2-b", {duration: 1, opacity: 0});
// 		tl2.to(".project-2-b", {duration: 1, opacity: 1}, "+=4");
// 		tl2.from(".project-2-c", {duration: 1, opacity: 0});
// 		tl2.to(".project-2-c", {duration: 1, opacity: 1}, "+=4");

// 		// Fade secondary images for next loop
// 		tl2.to(".project-2-b", {duration: 1, opacity: 0});
// 		tl2.to(".project-2-c", {duration: 1, opacity: 0});
// 	}
// }