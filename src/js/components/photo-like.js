export const PhotoLike = () => {


    const select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.like'),
        heart = select('#heart'),
        allLines = selectAll('#grouped-lines line');

    function playHeartTl() {
        const heartTl = new TimelineMax();

        heartTl
        .set(allLines, {
            drawSVG: '30% 30%',
            autoAlpha: 0
        })
        .add('fireworks')
        .fromTo(heart, 0.4, {
            scale: 1.0,
            transformOrigin: 'center center',
        }, {
            scale: 0.8,
            transformOrigin: 'center center',
            ease:Elastic.easeOut.config(0.2, 0.8)
        })
        .set(allLines, {
            autoAlpha: 1
        })
        .to(allLines, 0.2, {
            drawSVG: '30% 70%',
            ease:Linear.easeNone
        })
        .to(allLines, 0.3, {
            drawSVG: '100% 100%',
            ease:Linear.easeNone
        })
        .to(heart, 0.4,{
            scale: 1.0,
            ease:Elastic.easeOut.config(1.6, 0.8)
        }, '-=0.6');

        return heartTl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {
            TweenMax.set(allLines, {
                drawSVG: '20% 20%',
                autoAlpha: 0
            });

            heart.addEventListener('click', function () {
                playHeartTl();
            });
        }

    }
    init();

};
