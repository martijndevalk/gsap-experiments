


export const GenderReveal = () => {

    const body         = document.querySelector('body'),
          btnReveal    = document.querySelector('#reveal-it'),
          stage        = document.querySelector('.gender-reveal'),
          mainTitle    = document.querySelector('.heading'),
          otherWords   = document.querySelectorAll('.heading--text'),
          questionMark = document.querySelector('.question-mark'),
          boyWord      = document.querySelector('.heading--boy'),
          girlWord     = document.querySelector('.heading--girl'),
          boyGender    = document.querySelector('.reveal__gender--boy svg'),
          girlGender   = document.querySelector('.reveal__gender--girl svg'),
          confet       = document.querySelector('#confetti'),
          mainTl       = new TimelineMax();


          function clearStage() {
      		const clearTl = new TimelineMax({
                delay: 1.0
            });

      		clearTl
                .set(mainTitle, {y: -50})
                .set(boyWord, {autoAlpha: 0.3})
                .set(girlWord, {autoAlpha: 0.3})
                .set(boyGender, {scale: 0, rotation: 0})
                .set(girlGender, {scale: 0, rotation: 0});

      		return clearTl;
      	}

        function getIntroTl(){
    		const introTL = new TimelineMax();

    		introTL
                .to(mainTitle, 0.5, {y: 0, autoAlpha: 1, ease: Power4.easeOut})
                .to(mainTitle, 0.5, {scale:1.4, ease: Back.easeOut.config( 1.7)}, '-=0.2')
                .to(boyWord, 0.4, {autoAlpha: 1})
                .to(girlWord, 0.4, {autoAlpha: 1})
                .to(btnReveal, 1, {autoAlpha: 1})
                ;

    		return introTL;
    	}

        function getRevealTl(){
    		const revealTL = new TimelineMax({paused: true});

            btnReveal.addEventListener('click', function(event) {
                event.preventDefault();
                body.classList.add('gender-is-active');
                revealTL.play();
            });

    		revealTL
                .add('removeElms')
                .to(mainTitle, 1, {y: -50, autoAlpha: 0, ease: Power4.easeOut})
                .to(btnReveal, 1, {autoAlpha: 0, ease: Power4.easeOut}, 'removeElms-=0.5')
                // .to(boyGender, 2.5, {scale: 1, rotation: 720, autoAlpha: 1, transformOrigin: '110px 158px'})
                .to(girlGender, 2.5, {scale: 1, rotation: 720, autoAlpha: 1, transformOrigin: '110px 110px'})
                .to(confet, 1, {autoAlpha: 1}, '-=0.5')
                ;

    		return revealTL;
    	}

        function getExcitingTl(){
    		const excitingTL = new TimelineMax({paused: true});

            btnReveal.addEventListener('mouseover', function(event) {
                excitingTL.play();
            });

            btnReveal.addEventListener('mouseout', function(event) {
                excitingTL.pause();
            });

    		excitingTL
                .to(mainTitle, 0.1, {y:"+=10", yoyo:true, repeat:-1})
                .to(mainTitle, 0.1, {y:"-=10", yoyo:true, repeat:-1})
                ;

    		return excitingTL;
    	}

        function init(){

    		mainTl
    			.add(clearStage())
                .add(getIntroTl(), 'scene-intro');

            getRevealTl();
            getExcitingTl();
    	}
    	init();


// Confetti

(function() {
    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

    NUM_CONFETTI = 350;

    COLORS = [
        [85, 71, 106],
        [174, 61, 99],
        [219, 56, 83],
        [244, 92, 68],
        [248, 182, 70]
    ];

    PI_2 = 2 * Math.PI;

    canvas = document.getElementById("confetti");

    context = canvas.getContext("2d");

    window.w = 0;

    window.h = 0;

    resizeWindow = function() {
        window.w = canvas.width = window.innerWidth;
        return window.h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeWindow, false);

    window.onload = function() {
        return setTimeout(resizeWindow, 0);
    };

    range = function(a, b) {
        return (b - a) * Math.random() + a;
    };

    drawCircle = function(x, y, r, style) {
        context.beginPath();
        context.arc(x, y, r, 0, PI_2, false);
        context.fillStyle = style;
        return context.fill();
    };

    xpos = 0.5;

    document.onmousemove = function(e) {
        return xpos = e.pageX / w;
    };

    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    })();

    Confetti = (function() {
        function Confetti() {
            this.style = COLORS[~~range(0, 5)];
            this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
            this.r = ~~range(2, 6);
            this.r2 = 2 * this.r;
            this.replace();
        }

        Confetti.prototype.replace = function() {
            this.opacity = 0;
            this.dop = 0.03 * range(1, 4);
            this.x = range(-this.r2, w - this.r2);
            this.y = range(-20, h - this.r2);
            this.xmax = w - this.r;
            this.ymax = h - this.r;
            this.vx = range(0, 2) + 8 * xpos - 5;
            return this.vy = 0.7 * this.r + range(-1, 1);
        };

        Confetti.prototype.draw = function() {
            var ref;
            this.x += this.vx;
            this.y += this.vy;
            this.opacity += this.dop;
            if (this.opacity > 1) {
                this.opacity = 1;
                this.dop *= -1;
            }
            if (this.opacity < 0 || this.y > this.ymax) {
                this.replace();
            }
            if (!((0 < (ref = this.x) && ref < this.xmax))) {
                this.x = (this.x + this.xmax) % this.xmax;
            }
            return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
        };

        return Confetti;

    })();

    confetti = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
            results.push(new Confetti);
        }
        return results;
    })();

    window.step = function() {
        var c, j, len, results;
        requestAnimationFrame(step);
        context.clearRect(0, 0, w, h);
        results = [];
        for (j = 0, len = confetti.length; j < len; j++) {
            c = confetti[j];
            results.push(c.draw());
        }
        return results;
    };

    step();

}).call(this);

};
