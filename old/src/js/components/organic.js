export const Organic = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.organic'),
        shape1 = select('#shape1'),
        shape2 = select('#shape2'),
        mainTl = new TimelineMax({
            paused: false,
            // yoyo: true,
            // yoyoEase: true,
        });

    function getOrganicTl() {
        const organicTl = new TimelineMax();
        // organicTl.timeScale(4);
        CSSPlugin.defaultSmoothOrigin = true;

        organicTl
        .to(shape1, 4, {
            morphSVG: "M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z",
            ease: Elastic. easeOut.config( 1, 0.5),
            yoyoEase: Elastic. easeOut.config( 1, 0.5),
            repeat: -1,
            repeatDelay: 0.1
        })

        return organicTl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {

            mainTl
                .add(getOrganicTl(), 'play-organic');

            // shape.addEventListener('mouseover', function () {
            //     mainTl.seek('play-organic').play();
            //     this.classList.add('is-active');
            // });
        }

    }
    init();

};
