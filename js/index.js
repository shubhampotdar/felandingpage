
var words = ['R&D','Product Development', 'Web and App Development','Digital Marketing'];
var numOfWords = words.length;
var counter = 0;

setInterval(function() {
  //make the fing thing rotate
	$('#spinner').toggleClass('rotate');
	//
}, 1750); 

setInterval(function() {

	var coreAnim = function(){ 
		var live = $('.live');
		var bottom = $('.bottom');
	
	   //live moves to top and hide
	   live.animate({ 
			opacity: 0.0,
			marginTop: "-100px"
		}, 1000, 'linear', function(){
			live.removeClass('live').addClass('bottom hidden');
			live.removeAttr('style');
		});
	   //bottom unhide moves to live 
	   bottom.text(words[counter]);
	   bottom.removeClass("hidden");
	   bottom.animate({ 
			opacity: 1.0,
			marginTop: "0px"
		}, 1000, 'linear', function(){
			bottom.removeClass('bottom').addClass('live');
			bottom.removeAttr('style');
		});
	};

	var updateCounter = function(){
		if((counter + 1) == numOfWords){
			counter = 0;
		} else {
			counter++;
		}
	};

	var cleanUp = function(){
		var item = $('.bottom');		
		$after = item.next();
		item.insertAfter($after);
	};
	
	coreAnim();
	updateCounter();
	cleanUp();

}, 3500);



// particlez


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FF0000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffff00"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


// /* ---- stats.js config ---- */

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

$('a').click(function(){
    $(this).addClass("visited");
});