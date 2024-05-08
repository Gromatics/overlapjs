import './style.css'
import { OverlapJs } from './OverlapJs.ts'
import { dragElement } from './drag-element.ts'


 new OverlapJs({
    container: '.drag-container',
    topElement: '.overlap-top',
    bottomElement: '.overlap-bottom',
    overlapStyle: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://source.unsplash.com/random/300×300?nature)'
    },
    overlapClass: 'bg-purple'
});


const bottomDiv = document.getElementsByClassName('overlap-bottom')[0] as HTMLElement;
if(bottomDiv) {
    dragElement(bottomDiv);
}


new OverlapJs({
    container: '.rotate-container',
    topElement: '.overlap2-top',
    bottomElement: '.overlap2-bottom',
    overlapStyle: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://source.unsplash.com/random/300×300?nature)'
    },
    overlapClass: 'bg-purple'
});
const bottomDiv2 = document.getElementsByClassName('overlap2-bottom')[0] as HTMLElement;
let rotation = 0;
setInterval(function() {
    bottomDiv2.style.transform = `rotate(${rotation}deg)`
    rotation += 20;
}, 1000);

