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
        gLines = selectAll('#grouped-lines line'),
        gSparksGrow = select('#grouped-sparks-grow'),
        gSparksMove = select('#grouped-sparks-move'),
        gSparksGrowCircle = select('#grouped-sparks-grow circle'),
        gSparksMoveCircle = select('#grouped-sparks-move circle'),
        sparksGrowColors = ['#f5a503','#7ac943','#f5a503','#ff7bac','#4ad9d9','#7ac943','#36b1bf', '#36b1bf'],
        sparksMoveColors = ['#f2385a','#f5a503','#ff7bac','#36b1bf','#7ac943','#f2385a','#f5a503', '#4ad9d9'];

    CSSPlugin.defaultSmoothOrigin = true;

    function playHeartTl() {
        const heartTl = new TimelineMax();

        heartTl
        .set(gLines, {
            drawSVG: '30% 30%',
            autoAlpha: 0
        })
        .set([gSparksGrow, gSparksMove], {
            scale: 1,
            transformOrigin: '0% 0%'
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
        .set([gSparksGrow, gSparksMove, gLines], {
            autoAlpha: 1
        })
        .to(gSparksGrow, 1, {
            scale: 1.5,
            transformOrigin: '50% 50%'
        })
        .to(gSparksMove, 1, {
            scale: 1.2,
            transformOrigin: '50% 50%'
        })
        .to(gLines, 0.1, {
            drawSVG: '30% 70%',
            ease:Linear.easeNone
        })
        .to(gLines, 0.2, {
            drawSVG: '100% 100%',
            ease:Linear.easeNone
        })
        .to(heart, 0.4,{
            scale: 1.0,
            ease:Elastic.easeOut.config(1.6, 0.8)
        }, '-=0.4');

        return heartTl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {
            TweenMax.set(gLines, {
                drawSVG: '20% 20%',
                autoAlpha: 0
            });

            heart.addEventListener('click', function () {
                playHeartTl();
                this.classList.add('is-active');
            });
        }

    }
    init();

};
