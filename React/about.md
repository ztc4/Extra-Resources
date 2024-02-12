## GETTING STARTED
1. Create a folder that you would like to work in
2. Open the folder in VsCode, then open the terminal in vscode
3.  Enter the following in the terminal - "npx create-react-app ."
    - npx:  represents something similar to npm
    - create-react-app: name of the package
    - . : the period at the end represents you wanting to download everything in this folder
4. It will then in the terminal ask if you want to enter the default setting, and if not just hit enter on everything
5. Your react application is now created 
6. run "npm start" to see the application within a browser, that allows you to see changes when you make it.

## Understanding the React Folder
### Now that you have created your react, lets understand it
#### PUBLIC
 - The Public folder is where you want to store all your things related to images, fonts, icons and etc

#### SRC
- index.js
    1. Click on the index.js file
    2. This index.js is your root file, this is file that gets the root, and then you want to render something in, usually app.js
    3. Most of the code is just boiler plate code for the react.js app, so you should never delete this
    4. Looking in the root.render, you will notice it has something like < APP/>
        - the following is a component, I like to call it a page, if it represents a webpage
- app.js
    1. click on the app.js file
    2. This is a component(sometimes call it a page, if its really large)
     - if you see component look like functions that return divs, h1, and etc
     - the components must be capitalized, or else they wont work
    3. LOOK IN THE example-application folder in the src, go into the app.js I have examples of the React basic, get familiar with them



## REACT BASIC
 - [PROPS](https://www.youtube.com/watch?v=PHaECbrKgs0) - passing down values into a component, could pass down an function, object, array, strings,numbers and etc..
 - useSTATE - storing variables in a way that causes rerender, when you change this variable.
 - useEFFECT - code that you want to run only on certain renders, or changes
 - Conditional Rendering - render components, certain css classes or html on certain conditions

## React Advanced
- React Router - allows multpliy pages
- React Context, and Redux - a way to pass down props in situations where a component within a component within a component needs it


## REACT VS NO FRAMEWORK(DOM)
- allows better reusuability by component
- more interactive
- ease of developing large applications
- client side rendering
