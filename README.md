# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Dependencies

### Bootstrap & SASS

- **Bootstrap design system** & **SASS (pre-processor CSS)** installation

```bash
# bootstrap install.
npm i --save bootstrap @popperjs/core

# SASS install.
npm i --save-dev sass
```

- learn more on [Bootstrap & SASS doc. here](https://getbootstrap.com/docs/5.3/getting-started/vite/)

### `GSAP` animations tool

- about `GSAP` animations tool

```jsx
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,Draggable,DrawSVGPlugin,EaselPlugin,Flip,GSDevTools,InertiaPlugin,MotionPathHelper,MotionPathPlugin,MorphSVGPlugin,Observer,Physics2DPlugin,PhysicsPropsPlugin,PixiPlugin,ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);
```

- `Lenis`, a free & open source JS tool as `GSAP ScrollSmoother`.
  - see [Lenis doc. here](https://lenis.darkroom.engineering/)
  - `Lenis & React` doc., see [here](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md)

## Info / modern, high-performance React application starter

- *A modern, high-performance React application starter with Next.js 15, React 19, Tailwind CSS v4, and advanced WebGL capabilities*
    - More informations [here](https://github.com/darkroomengineering/satus)

### React router

## Library & tools versions number used on devloppement workin's collaboration

- `React` **v19.1.1**
- `React Router` **v7.8.1**
- `GSAP` **v.3.13.0**
- `@gsap/react`**v2.1.2**
- `vite.js` **v7.1.2**
- ``
- ``

## Liens vers valeurs, soutiens, échange...

- `Les Compagnons du DevOps`[](https://www.compagnons-devops.fr/mentor/)
- Mentorat DevOps permet d'avoir l'accompagnement qui te correspond

Mentorat DevOps

*Le DevOps, c’est un chemin.
Mais il ne se fait pas seul.
Et surtout : on n'a pas tous les mêmes besoins*.`
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ``
- ```


```js
const LINKS = [
    {},
    {},
    {},
    {},
]
```

## Raccourcies

- *Bash* - *exemples of langages interpretation*

```bash
# use this character before write comments

# bootstrap install.
npm i --save bootstrap @popperjs/core

# SASS install.
npm i --save-dev sass
```

- JS

```js
// exemple: to write a JS code on a markdown file
const arrowFunctionExemple = (a, b, c, d) => a + b + c + d;
```