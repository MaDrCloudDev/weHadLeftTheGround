# [weHadLeftTheGround](https://wehadlefttheground.MaDr.io) (desktop only)
My open-source, interactive CSS + JS poem
### I've moved the project into Astro to make it easier to manage and manipulate, but it can still be used as a single-page HTML file by referencing [index.astro](https://github.com/MaDrCloudDev/weHadLeftTheGround/blob/main/src/pages/index.astro). Just replace the \<Container> HTML element with a \<body> element.
#### You can also just run it in Asro:
```
npm i
npm run dev
```
#### Bug: Separating the CSS and JS from the HTML causes the CSS transition to break on initial load. It works after a refresh, but ruins the effect for any original visitor. If anyone can figure out why/how to fix it, please give it a shot.

