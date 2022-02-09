const tl = gsap.timeline();

// Animation slide 1
tl.from(".intro1", {duration: 1, opacity: 0, x: "-150"}, "+=1");
tl.to(".intro1", {duration: 1, opacity: 1, ease: "back"});
tl.from(".intro1-text", {duration: 1.5, opacity: 0, x: "100"}, "-=1");
tl.to(".intro1-text", {duration: 1.5, opacity: 1, ease: "back"});
tl.from(".cta", {duration: 1, opacity: 0}, "-=1");
tl.to(".cta", {duration: 1, opacity: 1, ease: "back"}, "+=4");

// Removes the boxes for next animation
tl.to(".intro1", {duration: 1, opacity: 0, x: "-150", ease: "back"});
tl.to(".intro1-text", {duration: 1, opacity: 0, x: "100", ease: "back"}, "-=1");
tl.to(".cta", {duration: 2, opacity: 1, left: "22%"}, "-=1");

// Animation slide 2
tl.from(".intro2", {duration: 1, opacity: 0, x: "150"}, "-=1");
tl.to(".intro2", {duration: 1, opacity: 1, ease: "back"});
tl.from(".intro2-text", {duration: 2, opacity: 0, x: "-100"}, "-=2");
tl.to(".intro2-text", {duration: 2, opacity: 1, ease: "back"}, "+=4");

// Removes the boxes for next animation
tl.to(".intro2", {duration: 1, opacity: 0, x: "150", ease: "back"});
tl.to(".intro2-text", {duration: 1, opacity: 0, x: "-100", ease: "back"}, "-=1");
tl.to(".cta", {duration: 2, opacity: 1, left: "78%"}, "-=1");

// Animation slide 3
tl.from(".intro3", {duration: 1, opacity: 0, x: "-150"}, "-=1");
tl.to(".intro3", {duration: 1, opacity: 1, ease: "back"});
tl.from(".intro3-text", {duration: 2, opacity: 0, x: "100"}, "-=2");
tl.to(".intro3-text", {duration: 2, opacity: 1, ease: "back"});