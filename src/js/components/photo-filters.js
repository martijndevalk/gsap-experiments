export const PhotoFilters = () => {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.photo-filters'),
        photoContainer = select('.photo-filters__photo'),
        photoContainer2 = select('.photo-container2'),
        photoContainer3 = select('.photo-container3'),
        photoContainer4 = select('.photo-container4'),
        photoContainer5 = select('.photo-container5'),
        photo1 = new PIXI.Application(2160, 1440, {
        	backgroundColor: 0xffffff,
            autoResize: true,
            view:document.getElementById("photo1")
        }),
        photo2 = new PIXI.Application(500, 500, {
        	backgroundColor: 0xffffff,
            autoResize: true,
            view:document.getElementById("photo2")
        }),
        photo3 = new PIXI.Application(500, 500, {
        	backgroundColor: 0xffffff,
            autoResize: true,
            view:document.getElementById("photo3")
        }),
        photo4 = new PIXI.Application(500, 500, {
        	backgroundColor: 0xffffff,
            autoResize: true,
            view:document.getElementById("photo4")
        }),
        photo5 = new PIXI.Application(500, 500, {
        	backgroundColor: 0xffffff,
            autoResize: true,
            view:document.getElementById("photo5")
        }),
        mainTl = new TimelineMax();

    function getPhotoTl() {
        const photoTl = new TimelineMax();


        photoContainer = PIXI.Sprite.fromImage('../img/pip.jpg', true);
        photoContainer2 = PIXI.Sprite.fromImage('../img/pip2.jpg', true);
        photoContainer3 = PIXI.Sprite.fromImage('../img/pip2.jpg', true);
        photoContainer4 = PIXI.Sprite.fromImage('../img/pip2.jpg', true);
        photoContainer5 = PIXI.Sprite.fromImage('../img/pip2.jpg', true);

        photo1.stage.addChild(photoContainer);
        photo2.stage.addChild(photoContainer2);
        photo3.stage.addChild(photoContainer3);
        photo4.stage.addChild(photoContainer4);
        photo5.stage.addChild(photoContainer5);

        photoTl
        .to(photoContainer, 1, {
            pixi: {
                colorize: 'blue', colorizeAmount: 0.5 }
        })
        .to(photoContainer, 1, {
            pixi: {
                hue: 280 }
        })
        .to(photoContainer, 1, {
            pixi: {
                scale: 0.5, skewX: 30, ease: Power1.easeOut }
        })
        .to(photoContainer, 1, {
            pixi: {
                scale: 1, skewX: 0, ease: Power4.easeOut }
        })
        .to(photoContainer, 1, {
            pixi: {
                saturation: 0 }
        })
        .to(photoContainer, 1, {
            pixi: {
                brightness: 2 }
        })
        .to(photoContainer, 1, {
            pixi: {
                contrast: 1.5 }
        })
        .to(photoContainer, 1, {
            pixi: {
                blur: 20 }
        })
        .to(photoContainer, 1, {
            pixi: {
                colorMatrixFilter: null,
                blur: 0 }
        });

        return photoTl;
    }

    function init() {

        const componentExist = document.body.contains(stage);

        if (componentExist == true) {

            mainTl
                .add(getPhotoTl(), 'play-photo');

            mainTl.seek('play-heart').play();

            TweenMax.to(photoContainer2, 1, {
                pixi: {
                    contrast: 0.8,
                    colorize: 'red',
                    combineCMF: true
                 }
            });

            TweenMax.to(photoContainer3, 1, {
                pixi: {
                    contrast: 1.2,
                    brightness: 1.2,
                    combineCMF: true
                 }
            });

            TweenMax.to(photoContainer4, 1, {
                pixi: {
                    brightness: 2.5,
                    colorize: 'hsl(200, 100%, 22%)',
                    combineCMF: true
                 }
            });


            let duotone = new PIXI.filters.ColorMatrixFilter();
            duotone._loadMatrix([0.83984375, 0, 0, 0, 0.09765625, -0.08984375, 0, 0, 0, 0.14453125, -0.1328125, 0, 0, 0, 0.3125, 0, 0, 0, 1, 0], false);

            TweenMax.to(photoContainer5, 1, {
                pixi: {
                    colorMatrixFilter: duotone
                }
            });
        }


    }
    init();

};
