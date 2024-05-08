// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
//
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import './style.css'
import { overlapJs } from './overlap-js.ts'
import { dragElement } from './drag-element.ts'

const topDiv = document.getElementsByClassName('overlap-top')[0] as HTMLElement;
if(topDiv) {
    dragElement(topDiv);
}
const bottomDiv = document.getElementsByClassName('overlap-bottom')[0] as HTMLElement;
if(bottomDiv) {
    dragElement(bottomDiv);
}



overlapJs('.overlap', '.overlap-top', '.overlap-bottom', {backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://images.unsplash.com/photo-1714770474609-2ba25a6c3d53?q=80&w=540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'});
