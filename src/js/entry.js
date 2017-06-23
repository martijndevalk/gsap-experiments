// Vendor
import $ from 'jquery';
import jQuery from 'jquery';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

import TweenMax from 'gsap/TweenMax';
import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';

// This file contains all the dirty hacks and specificity fixes to make them
// more transparent, quantifiable and isolated;
import Shame from './common/shame';

// Components
import { GenderReveal } from './components/gender-reveal';


// HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    document.documentElement.className = 'js'; // Remove 'no-js' class from html tag, add 'js' classs

    // Dedicated to housing the nasty, hacky, quick-fix code ;)s
    Shame();

    GenderReveal();

});
