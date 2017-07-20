export const Vendetta = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.vendetta'),
        marqueeCircle = select('#marqueeCircle'),
        mainTl = new TimelineMax({
            paused: false, repeat: -1, yoyo: false, repeatDelay: 0.1
        });

    function getVendettaTl() {
        const vendettaTl = new TimelineMax();
        vendettaTl.timeScale(1);
        CSSPlugin.defaultSmoothOrigin = true;

        vendettaTl
        .fromTo(marqueeCircle, 4, {
            // svgOrigin: '60 -60',
            attr: {
                cx: 400,
                cy: 300,
                rx: 0,
                ry: 0
            }
        }, {
            attr: {
                cx: 400,
                cy: 300,
                rx: 300,
                ry: 300
            }
        })



        // .to(lineStraight, 1.0, {y: -400, ease: Power4.easeOut })
        // .to([triangle, rectangle, hexagon], 1, {y: -400, scaleY: 1.0, ease: Back.easeOut.config(2.1) }, '-=1.0')
        // .to(lineStraight, 0.5, {
        //     ease: Elastic.easeOut.config(1, 0.4),
        //     scaleX: 1.2,
        //     transformOrigin: '50% 50%',
        //     morphSVG: {
        //         points: lineBend.getAttribute('points')
        //     }
        // }, '-=0.9')
        // .to(lineStraight, 0.5, {
        //     ease: Elastic.easeOut.config(1, 0.4),
        //     morphSVG: {
        //         points: lineStraight.getAttribute('points')
        //     }
        // }, '-=0.5')
        // .fromTo([triangle, rectangle, hexagon], 1.4, {scaleY: 0.85, transformOrigin: '100% 100%'}, {scaleY: 1.0, ease: Elastic.easeOut.config(1, 0.6) })
        // .to(lineStraight, 0.4, { rotation: -90, transformOrigin: '100% 100%', ease: Back.easeOut.config(2.1) }, '+=0.2')
        // .staggerTo(figures, 1.5, {
        //     rotation: -65,
        //     physics2D: {
        //         gravity: 600,
        //     }
        // }, '0.05', '-=0.43');

        return vendettaTl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {

            mainTl
                .add(getVendettaTl(), 'play-vendetta');

            // ScrubGSAPTimeline(mainTl);

        }

    }
    init();

};
