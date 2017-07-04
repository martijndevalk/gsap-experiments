export const PhotoLike = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.like'),
        heartContainer = select('.like__heart'),
        svgContainer = select('.like__heart .svg-container'),
        heart = select('#heart'),
        gLines = selectAll('#grouped-lines line'),
        gSparksGrow = select('#grouped-sparks-grow'),
        gSparksMove = select('#grouped-sparks-move'),
        gSparksGrowCircle = selectAll('#grouped-sparks-grow circle'),
        gSparksMoveCircle = selectAll('#grouped-sparks-move circle'),
        sparksGrowColors = ['#f2385a','#f5a503','#ff7bac','#36b1bf','#7ac943','#f2385a','#f5a503', '#4ad9d9'],
        sparksMoveColors = ['#f5a503','#7ac943','#f5a503','#ff7bac','#4ad9d9','#7ac943','#36b1bf', '#36b1bf'],
        mainTl = new TimelineMax({
            paused: true
        });

    function getHeartTl() {
        const heartTl = new TimelineMax();
        heartTl.timeScale(4);
        CSSPlugin.defaultSmoothOrigin = true;

        heartTl
        .set(gLines, {
            drawSVG: '30% 30%'
        })
        .set([gSparksGrow, gSparksMove], {
            alpha: 0,
            scale: 1
        })
        .set([gSparksGrowCircle, gSparksMoveCircle], {
            attr: {
                r: 5
            }
        })

        .set(heartContainer, {
            rotationY: 0,
            perspective: 800
        })
        .set(svgContainer, {
            transformStyle: "preserve-3d"
        })

        .fromTo(heart, 1.0, {
            scale: 1.0,
            transformOrigin: 'center center',
        }, {
            scale: 0.8,
            ease:Elastic.easeOut.config(0.2, 0.8)
        })
        .to(heart, 1.0, {
            scale: 1.0,
            ease:Elastic.easeOut.config(1.6, 0.8)
        })

        .set([gSparksGrow, gSparksMove], {
            alpha: 1
        }, '-=0.5')
        .to(gSparksGrow, 1, {
            scale: 1.5,
            transformOrigin: 'center center'
        }, '-=0.5')
        .to(gSparksMove, 1, {
            scale: 1.2,
            transformOrigin: 'center center'
        }, '-=0.5')

        .staggerTo(gSparksGrowCircle, 2, {
          attr: {
              r: 0
          },
          cycle: {
              fill: function(i) {
                  return sparksGrowColors[i];
              }
          }
        }, 0,'-=0.9')
        .staggerTo(gSparksMoveCircle, 2, {
          attr: {
              r: 0
          },
          cycle: {
              fill: function(i) {
                  return sparksMoveColors[i];
              }
          }
        }, 0,'-=2')

        .set(gLines, {
            autoAlpha: 1
        }, 1.0)
        .to(gLines, 0.8, {
            drawSVG: '30% 70%',
            ease:Linear.easeNone
        }, 1.0)
        .to(gLines, 0.8, {
            drawSVG: '100% 100%',
            ease:Linear.easeNone
        }, 1.5)
        .to(heartContainer, 1.4, {
            rotationY: 180,
            ease:Back.easeOut
        }, '-=1.0')
        .to(stage, 2, {'--bgColor': '#eab5b3'},'-=0.5')
        .to(stage, 2, {'--HeartScale': 2},'-=0.5')

        return heartTl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {

            mainTl
                .add(getHeartTl(), 'play-heart');

            heart.addEventListener('click', function () {
                mainTl.seek('play-heart').play();
                this.classList.add('is-active');
            });
        }

    }
    init();

};
