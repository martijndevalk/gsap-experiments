export default function duotone() {

    let select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },
        body = select('body'),
        stage = select('.duotone');


    function convertToDueTone(color1, color2) {

      let matrix = document.querySelector('feColorMatrix'),
          value = [];

        value = value.concat(
        [color1[0]/256 - color2[0]/256, 0, 0, 0, color2[0]/256]);

        value = value.concat(
        [color1[1]/256 - color2[1]/256, 0, 0, 0, color2[1]/256]);

        value = value.concat(
        [color1[2]/256 - color2[2]/256, 0, 0, 0, color2[2]/256]);

        value = value.concat([0, 0, 0, 1, 0]);

        matrix.setAttribute('values', value.join(' '));
    }

    function init() {
        const componentExist = document.body.contains(stage);

        if (componentExist == true) {
            // RED
            convertToDueTone([240, 14, 46], [25, 37, 80]);

            // GREEN
            //convertToDueTone([115, 217, 112], [36, 32, 106]);
        }
    }
    init();
}
