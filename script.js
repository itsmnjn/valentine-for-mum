particlesJS("particles-js", {
	particles: {
		number: {
			value: 36,
			density: { enable: true, value_area: 962.0443442314919 }
		},
		color: { value: "#f7dee9" },
		shape: {
			type: "polygon",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 },
			image: {
				src: "petal.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.6,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
		},
		size: {
			value: 3.945745992601726,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 4,
			direction: "bottom-left",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 1341.553637484587,
				rotateY: 1341.553637484587
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: false, mode: "repulse" },
			onclick: { enable: false, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
})
var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = "absolute"
stats.domElement.style.left = "0px"
stats.domElement.style.top = "0px"
update = function() {
	requestAnimationFrame(update)
}
requestAnimationFrame(update)
