function breatext() {
   let h1 = document.querySelector(".content h1");
   let h1text = h1.textContent;
   // console.log(h1text);

   let content = ""

   let splited = h1text.split("");
   // console.log(splited);

   splited.forEach(function (e) {
      content += `<span>${e}</span>`

   })
   h1.innerHTML = content
}
breatext();

gsap.from(".content h1 span", {
   y: 100,
   opacity: 0,
   duration: 1,
   delay: .5,
   stagger: .15
})

gsap.from(".content p", {
   y: 100,
   opacity: 0,
   duration: 1,
   delay: .5,
   stagger: .15
})
gsap.from(".content .btn-part", {
   y: 100,
   opacity: 0,
   duration: 1,
   delay: 1,
   stagger: .15
})



gsap.from(".about img.img-fluid", {
   x: -200, // Moves the image from the left (-200px)
   opacity: 0, // Starts with opacity 0
   scale: 0.8, // Slightly smaller on entry
   duration: 2, // Animation duration
   ease: "power3.out", // Smooth easing
   delay: 1,
   scrollTrigger: {
      trigger: ".about img.img-fluid",
      scroller: "body",
      start: "top 80%", // Starts animation when 80% of the viewport reaches the element
      end: "top 50%",
      scrub: 1, // Smooth scrolling effect
      markers: false, // Remove markers after testing
   },
});


// about right side
// Animate Heading
gsap.from(".about .main_contentt h1", {
   y: 100,  // Moves from bottom
   opacity: 0,
   duration: 1.2,
   ease: "power4.out",
   scale: 0.8,
   scrollTrigger: {
      trigger: ".about .main_contentt h1",
      scroller: "body",
      start: "top 85%", // Start slightly earlier
      end: "top 60%",
      scrub: 1, // Smooth effect
      markers: false,
   }
});


gsap.from(gsap.utils.toArray(".about .main_contentt #para #one"), {
   y: 120,  // Moves from bottom
   opacity: 0,
   duration: 1.5,
   ease: "power4.out",
   delay: .3,
   scale: .8,
   stagger: 0.2, // Each paragraph animates one after another
   scrollTrigger: {
      trigger: ".about .main_contentt #para #one",
      scroller: "body",
      start: "top 100%", // More natural start position
      end: "top 50%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});

gsap.from(gsap.utils.toArray(".about .main_contentt #para #two"), {
   y: 125,  // Moves from bottom
   opacity: 0,
   duration: 1.5,
   ease: "power4.out",
   scale: 0.8,
   delay: .4,
   stagger: 0.2, // Each paragraph animates one after another
   scrollTrigger: {
      trigger: ".about .main_contentt #para #two",
      scroller: "body",
      start: "top 98%", // More natural start position
      end: "top 50%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});

gsap.from(gsap.utils.toArray(".about .main_contentt #para #three"), {
   y: 130,  // Moves from bottom
   opacity: 0,
   duration: 1.5,
   delay: .5,
   ease: "power4.out",
   scale: 0.8,
   stagger: 0.2, // Each paragraph animates one after another
   scrollTrigger: {
      trigger: ".about .main_contentt #para #three",
      scroller: "body",
      start: "top 95%", // More natural start position
      end: "top 50%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});


// services setion
gsap.from(".services .main_content h1", {
   x: 300,
   opacity: 0,
   duration: 2,  // Smooth & controlled
   ease: "power3.out",  // More natural motion
   scale: 0.9,  // Slightly smaller start for depth effect
   scrollTrigger: {
      trigger: ".services .main_content h1",
      scroller: "body",
      start: "top 80%", // Starts when heading is 80% in viewport
      end: "top 50%", // Ends smoothly
      scrub: 1.5, // Controlled smooth effect
      markers: false,
   }
});





gsap.from(gsap.utils.toArray(".services .cards"), {
   y: 200,  // Moves from right
   opacity: 0,
   delay: .2,
   duration: 4,  // Faster animation per card
   ease: "power3.out",
   scale: 0.9,
   stagger: 0.8, // Each card animates one after another
   scrollTrigger: {
      trigger: ".services .cards",
      scroller: "body",
      start: "top 100%", // More natural start
      end: "top 40%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});


// product

gsap.from(".product .main_content h1", {
   x: 300,
   opacity: 0,
   duration: 2,  // Smooth & controlled
   ease: "power3.out",  // More natural motion
   scale: 0.9,  // Slightly smaller start for depth effect
   scrollTrigger: {
      trigger: ".product .main_content h1",
      scroller: "body",
      start: "top 80%", // Starts when heading is 80% in viewport
      end: "top 50%", // Ends smoothly
      scrub: 1.5, // Controlled smooth effect
      markers: false,
   }
});





gsap.from(gsap.utils.toArray(".product .box"), {
   y: 200,  // Moves from right
   opacity: 0,
   delay: .2,
   duration: 4,  // Faster animation per card
   ease: "power3.out",
   scale: 0.9,
   stagger: 1, // Each card animates one after another
   scrollTrigger: {
      trigger: ".product .box",
      scroller: "body",
      start: "top 100%", // More natural start
      end: "top 40%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});

// success

gsap.utils.toArray(".success .success_icon_box").forEach((box, index) => {
   gsap.from(box, {
      y: -150,  // Less aggressive bounce
      opacity: 0,
      duration: 1.5,  // Balanced speed
      ease: "bounce.out",  // Smooth bounce effect
      scale: 0.9,
      delay: index * 0.2,  // Creates a staggered effect
      scrollTrigger: {
         trigger: box,  // Triggers each icon box individually
         scroller: "body",
         start: "top 75%", // Starts when element is 75% in viewport
         end: "top 50%",
         toggleActions: "play none none none", // Prevents animation from restarting on scroll
         markers: false,
      }
   });
});

// choose


gsap.from(gsap.utils.toArray(".choose .left-content"), {
   y: -200,  // Moves from right
   opacity: 0,
   delay: .2,
   duration: 4,  // Faster animation per card
   ease: "power3.out",
   scale: 0.9,
   stagger: 1, // Each card animates one after another
   scrollTrigger: {
      trigger: ".choose .left-content",
      scroller: "body",
      start: "top 70%", // More natural start
      end: "top 40%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});

gsap.from(gsap.utils.toArray(".choose .form-container"), {
   y: 200,  // Moves from right
   opacity: 0,
   delay: .2,
   duration: 4,  // Faster animation per card
   ease: "power3.out",
   scale: 0.9,

   scrollTrigger: {
      trigger: ".choose .form-container",
      scroller: "body",
      start: "top 70%", // More natural start
      end: "top 40%",
      scrub: 1.2, // Smooth effect
      markers: false,
   }
});


