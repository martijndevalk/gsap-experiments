


export const GenderReveal = () => {

    const body         = document.querySelector('body'),
          btnReveal    = document.querySelector('#reveal-it'),
          stage        = document.querySelector('.gender-reveal'),
          mainTitle    = document.querySelector('.heading'),
          otherWords   = document.querySelectorAll('.heading--text'),
          questionMark = document.querySelector('.question-mark'),
          boyWord      = document.querySelector('.heading--boy'),
          girlWord     = document.querySelector('.heading--girl'),
          boyGender    = document.querySelector('.reveal__gender--boy svg'),
          girlGender   = document.querySelector('.reveal__gender--girl svg'),
          mainTl       = new TimelineMax();


          function clearStage() {
      		const clearTl = new TimelineMax({
                delay: 1.0
            });

      		clearTl
                .set(mainTitle, {y: -50})
                .set(boyWord, {autoAlpha: 0.3})
                .set(girlWord, {autoAlpha: 0.3})
                .set(boyGender, {scale: 0, rotation: 0})
                .set(girlGender, {scale: 0, rotation: 0});

      		return clearTl;
      	}

        function getIntroTl(){
    		const introTL = new TimelineMax();

    		introTL
                .to(mainTitle, 0.5, {y: 0, autoAlpha: 1, ease: Power4.easeOut})
                .to(mainTitle, 0.5, {scale:1.4, ease: Back.easeOut.config( 1.7)}, '-=0.2')
                .to(boyWord, 0.4, {autoAlpha: 1})
                .to(girlWord, 0.4, {autoAlpha: 1})
                ;

    		return introTL;
    	}

        function getRevealTl(){
    		const revealTL = new TimelineMax({paused: true});

            btnReveal.addEventListener('click', function(event) {
                event.preventDefault();
                revealTL.play();
            });

    		revealTL
                .to(boyGender, 2.5, {scale: 1, rotation: 720, autoAlpha: 1, transformOrigin: '110px 158px'})
                // .to(girlGender, 2.5, {scale: 1, rotation: 720, autoAlpha: 1, transformOrigin: '110px 110px'})
                ;

    		return revealTL;
    	}

        function getExcitingTl(){
    		const excitingTL = new TimelineMax({paused: true});

            btnReveal.addEventListener('mouseover', function(event) {
                excitingTL.play();
            });

            btnReveal.addEventListener('mouseout', function(event) {
                excitingTL.pause();
            });

    		excitingTL
                .to(mainTitle, 0.1, {y:"+=10", yoyo:true, repeat:-1})
                .to(mainTitle, 0.1, {y:"-=10", yoyo:true, repeat:-1})
                ;

    		return excitingTL;
    	}

        function init(){

    		mainTl
    			.add(clearStage())
                .add(getIntroTl(), 'scene-intro');

            getRevealTl();
            getExcitingTl();
    	}
    	init();

};
