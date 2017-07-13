export const Mask = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.mask'),
        zoom = select('.bg-visual-wrap'),
        ltrGroup = select('.letter-group'),
        ltrSmask = select('.s-mask'),
        ltrS = select('.letter-s'),
        bgVisual = select('.bg-visual'),

        mainTl = new TimelineMax({
            paused: false,
            repeat: -1,
            repeatDelay: 1
        });

    function getOrganicTl() {
        const organicTl = new TimelineMax();
        // organicTl.timeScale(4);
        CSSPlugin.defaultSmoothOrigin = true;

        // organicTl
        // .add('scale-text')
        // .set([ltrGroup, ltrSmask], { scale: 0.1 })
        // .to(ltrGroup, 2.5, {
        //     scale: 8,
        //     transformOrigin: '0% 0%',
        //     ease: Power4.easeOut
        // })
        // .to(ltrSmask, 2.5, {
        //     scale: 8,
        //     transformOrigin: '0% 0%',
        //     ease: Power4.easeOut
        // }, 'scale-text')
        //
        // .set(bgVisual, { autoAlpha: 1 })
        // .to(ltrS, 2, {
        //     autoAlpha: 0,
        //     ease: Power4.easeOut
        // }, '-=1')

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
