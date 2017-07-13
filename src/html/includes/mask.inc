<div class="mask">
    <div class="zoom">

        <svg class="hide-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clipShape" clipPathUnits="userSpaceOnUse">
                    <path class="s-mask" d="M72.64,29.69c-3.69-6.16-13.85-12-25.55-12C32,17.69,24.78,24,24.78,32c0,9.39,11.08,12,24,13.54,22.47,2.77,43.4,8.62,43.4,34.32,0,24-21.24,34.32-45.24,34.32-22,0-38.93-6.77-46.94-26.47l16.93-8.77C21.7,90.79,34.17,96,47.25,96,60,96,72,91.56,72,79.86,72,69.7,61.41,65.55,47.1,64c-22-2.62-42.32-8.46-42.32-32.62C4.78,9.23,26.63.15,46.48,0,63.25,0,80.64,4.77,88.8,21.39Z" />
                </clipPath>
            </defs>
        </svg>

        <svg id="visual" xmlns="http://www.w3.org/2000/svg">

            <g clip-path="url(#clipShape)" class="bg-visual-wrap">
                <image class="bg-visual" xlink:href="/img/sven.jpg" height="100%" width="100%" preserveAspectRatio="xMidYMid slice" />
            </g>

            <g class="letter-group-wrap">
                <g class="letter-group" fill="#fff">
                    <path class="letter-s" d="M72.64,29.69c-3.69-6.16-13.85-12-25.55-12C32,17.69,24.78,24,24.78,32c0,9.39,11.08,12,24,13.54,22.47,2.77,43.4,8.62,43.4,34.32,0,24-21.24,34.32-45.24,34.32-22,0-38.93-6.77-46.94-26.47l16.93-8.77C21.7,90.79,34.17,96,47.25,96,60,96,72,91.56,72,79.86,72,69.7,61.41,65.55,47.1,64c-22-2.62-42.32-8.46-42.32-32.62C4.78,9.23,26.63.15,46.48,0,63.25,0,80.64,4.77,88.8,21.39Z"/>
                    <path d="M166.36,111.86H145.28L100.49,3.68h22.78l32.47,83.87L188.36,3.68h22.78Z"/>
                    <path d="M303.93,111.4H223.29V3.68h80.64v19.7H243.45V48.16h58.32V67.08H243.45V91.39h60.48Z"/>
                    <path d="M393.64,3.53H414V111.4H401.36v.15L344.73,38.76v72.63H324.42V3.68h16.47l52.78,66.79Z"/>
                </g>
            </g>
        </svg>
    </div>
</div>

<script type="text/javascript">
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
};

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

    var centerElm = document.querySelector('.letter-group');
    var centerElmWidth = -centerElm.getBBox().width / 2;
    var centerElmHeight = -centerElm.getBBox().height / 2;

    centerElm.style.transform = "translate(" + centerElmWidth + "px," + centerElmHeight + "px)"

}, 250);

window.addEventListener('resize', myEfficientFn);

myEfficientFn();

</script>
