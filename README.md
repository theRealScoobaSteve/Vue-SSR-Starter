# Vue-SSR-Starter
A fully configured environment using server side rendering with webpack and vue.
## Requirements
* node 8+
* npm or yarn installed
## Instructions
* Fork this repository first and then clone, DO NOT clone the repository directly.
* run ```npm install``` in a command line inside of the repo's main directory
* run ```npm run dev``` to start the dev server
* Always create an issue before making a pull request to better document ideas and keep feature short and concise. If you do a bugfix, you should only 
have a PR with said bugfix, do NOT make a PR fixing multiple issues in one.
* There are a few aliases available via webpack to make pathing to your files easier. Every folder has its own
alias, for example to automatically import the styles folder use:
```scss
 @import "styles/...";
```
* To import a component from the components folder use: 
```javascript
import myComponent from "components/myComponent";
```
* Please always try to use these aliases, as the codebase grows, it will be easy to move around folder structure if need be this way, all folders
you will use will have an alias.
* A good example to understand vue single file components can be found here https://vegibit.com/single-file-components-in-vuejs/
## Testing
* All features should have a unit test within tests folder, we use jest and kermit (a team created puppeteer wrapper). The docs for each can be found here:
https://pptr.dev/ https://mochajs.org/ https://www.chaijs.com/ https://github.com/theRealScoobaSteve/kermit-pptr
## Style Guide
### SCSS
* For this project we use BEM css. Here is a great article if you are unfamiliar with BEM style guide https://css-tricks.com/bem-101/
* All css is required to be written in SASS, more specifically SCSS, if you are unfamiliar with SASS here is a quick guide. https://sass-lang.com/guid
* All style sheets may be inlined using the 
```html
<style lang="scss">
    // your scss here
</style>
```
however, if you create general selector, it would be best to add it to main.scss in ./public/styles/main.scss so other devs can use it
* All pull request's must be reviewed and approved by two people, this way we can identify best practices and give advice to each other to optimize the code base



