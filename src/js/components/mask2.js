export const Mask2 = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.mask2'),
        shape = selectAll('#clipShape2 path'),
        mainTl = new TimelineMax({
            paused: false,
            repeat: -1,
            repeatDelay: 1
        });

        console.log(shape);

    function getMask2Tl() {
        const mask2Tl = new TimelineMax();
        // organicTl.timeScale(4);
        CSSPlugin.defaultSmoothOrigin = true;

        mask2Tl
        .set(shape, {x: 1920})
        .to(shape, 4, {x: 0, ease:Power4.easeOutBounce })

        return mask2Tl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {

            mainTl
                .add(getMask2Tl(), 'play-mask2');

        }

    }
    init();

};
