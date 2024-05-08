# OverlapJs
OverlapJs is a lightweight and versatile npm package designed to seamlessly blend and overlap two HTML div elements, allowing you to effortlessly integrate images or colors into the overlapping areas.

![Draggable](readme/draggable.gif)

## Features
- Intersection Detection: Quickly determine if two elements overlap on the web page.
- Overlap Fill: Seamlessly fill the intersecting area of two elements with customizable content.
- Ease of Use: Straightforward API for integrating overlap detection and filling into your web projects.
- Flexibility: Customize the appearance and behavior of the filled overlap to suit your needs.
- Lightweight: Minimal overhead ensures optimal performance.

## Installation
You can install OverlapJs via npm:
``npm install overlap-js``

## Usage
Using OverlapJs in your TypeScript project is straightforward:

1. Import the library:
```
import { Overlap } from 'overlap-js';
```

2. Create an instance of Overlap and specify the config object:
```
 new Overlap({
    container: '.container',
    topElement: '.overlap-top',
    bottomElement: '.overlap-bottom',
    overlapStyle: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://source.unsplash.com/random/300×300?nature)'
    },
    overlapClass: 'bg-purple'
});
```

![Draggable](readme/rotating.gif)

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests on the GitHub repository.

## License
OverlapJs is licensed under the ISC License.

## Currenly not supported
- Scale on top and bottom element. If you want to use css scale, you can scale the container element
