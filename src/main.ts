import './style.css'
import { Overlap } from './overlap-js.ts'
import { dragElement } from './drag-element.ts'

// //Drag overlap
//  new Overlap({
//     container: '.drag-container',
//     topElement: '.overlap-top',
//     bottomElement: '.overlap-bottom',
//     overlapStyle: {
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundImage: 'url(https://source.unsplash.com/random/300×300?nature)'
//     },
//     overlapClass: 'bg-purple'
// });
//
// const bottomDiv = document.getElementsByClassName('overlap-bottom')[0] as HTMLElement;
// if(bottomDiv) {
//     dragElement(bottomDiv);
// }
//
// //Animating overlap
// new Overlap({
//     container: '.rotate-container',
//     topElement: '.overlap2-top',
//     bottomElement: '.overlap2-bottom',
//     overlapStyle: {
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundImage: 'url(https://source.unsplash.com/random/300×300?nature)'
//     },
//     overlapClass: 'bg-purple'
// });
// const bottomDiv2 = document.getElementsByClassName('overlap2-bottom')[0] as HTMLElement;
// let rotation = 0;
// setInterval(function() {
//     bottomDiv2.style.transform = `rotate(${rotation}deg)`
//     rotation += 20;
// }, 1000);

//SVG overlap
new Overlap({
    container: '.svg-drag-container',
    topElement: '.overlap3-top',
    bottomElement: '.overlap3-bottom',
    overlapStyle: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://source.unsplash.com/random/300×300?nature)'
    },
    overlapClass: 'bg-purple'
});
const bottom3Div = document.getElementsByClassName('overlap3-bottom')[0] as HTMLElement;
let rotation = 0;
setInterval(function() {
    bottom3Div.style.transform = `rotate(${rotation}deg)`
    rotation += 20;
}, 1000);
