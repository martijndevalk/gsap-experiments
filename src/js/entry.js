import PIXI from 'pixi.js';
import TweenMax from 'gsap';
import drawSVG from './vendor/gsap/DrawSVGPlugin';
import PixiPlugin from './vendor/gsap/PixiPlugin';
import MorphSVG from './vendor/gsap/MorphSVGPlugin';

import duotone from './components/duotone';
import picturefill from 'picturefill';

// This file contains all the dirty hacks and specificity fixes to make them
// more transparent, quantifiable and isolated;
import Shame from './common/shame';

// Components
import { GenderReveal } from './components/gender-reveal';
import { PhotoLike } from './components/photo-like';
import { PhotoFilters } from './components/photo-filters';
import { Organic } from './components/organic';


// HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    document.documentElement.className = 'js'; // Remove 'no-js' class from html tag, add 'js' classs

    // Dedicated to housing the nasty, hacky, quick-fix code ;)
    Shame();

    // Init
    GenderReveal();
    PhotoLike();
    PhotoFilters();
    duotone();
    Organic();
});
