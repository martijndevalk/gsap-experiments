export const Mask = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.mask'),
        letterG = select('.letter-g'),
        clipPath = select('.clip-path'),

        mainTl = new TimelineMax({
            paused: false,
            repeat: -1,
            repeatDelay: 1
        });

    function getMask1Tl() {
        const mask1Tl = new TimelineMax();
        // mask1Tl.timeScale(4);
        CSSPlugin.defaultSmoothOrigin = true;

        // mask1Tl
        // .add('scale-text')
        // .to(ltrGroup, 2.5, {
        //     scale: 8,
        //     ease: Power4.easeOut
        // })
        // .set(ltrSmask, { scale: 8 })
        //
        // .set(bgVisual, { autoAlpha: 1 })
        // .to(ltrS, 2, {
        //     autoAlpha: 0,
        //     ease: Power4.easeOut
        // }, '-=1')

        return mask1Tl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {

            mainTl
                .add(getMask1Tl(), 'play-mask1');

            // shape.addEventListener('mouseover', function () {
            //     mainTl.seek('play-organic').play();
            //     this.classList.add('is-active');
            // });
        }

    }
    init();

};


function debounce(func, wait, immediate) {
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
}

var myEfficientFn = debounce(function() {

    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    // console.log(x + ' × ' + y);

    var visual    = document.querySelector('#visual');
    var SVGWidth  = x;
    var SVGHeight = y;

    visual.setAttribute("viewBox","0 0 " + SVGWidth + " " + SVGHeight);

    var centerElm = document.querySelector('.letter-g');
    var centerElmWidth = -centerElm.getBBox().width / 2;
    var centerElmHeight = -centerElm.getBBox().height / 2;

    centerElm.style.transform = "translate(" + centerElmWidth + "px," + centerElmHeight + "px)";

}, 250);

window.addEventListener('resize', myEfficientFn);

myEfficientFn();
