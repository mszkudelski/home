# Home page about myself

## Description
This website is in polish language and you can find it here https://szkudelski.dev. 
Website contains information about my experience, technologies I know and way how to contact me. 
On subpage (https://szkudelski.dev/materiały) you can find also any materials related with me for example blogposts.

## About project

App is written in plain Javascript with Typescript. Everything is made from scratch without any external vendors. 
I used webpack for bundling js, css and every action related to making final build package. For Continuous Delivery I use Netlify.

App is made with SPA (Single Page Application) approach. Every page has its own .scss file and two .ts files - one for template and another for controller.
Router core codebase is in src/router directory. Every page is lazy loaded module declared in main index.ts file.
