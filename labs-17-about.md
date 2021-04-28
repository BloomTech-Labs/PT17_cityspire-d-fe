# How to debug jest unit test errors

The previous Labs team decided to use React as the best choice for the UI and they decided to use @craco/craco. 

Historically Webpack is hard to use and the documentation is long, there are endless possibilities and you have to deal with a ton of community packages to end up with the optimal configuration for your project. Add React to the mix and the complexity increases 10x.

Issues with Webpack:

In the beginning, when you're building the configuration for your new app, you will use Webpack. You might think that it's not that bad after all. But when you need to update your Webpack config 5 months later, you will have to start over and read all the documentation again.

React's Solution:

You can use CRA to abstract all this complexity for you. In a few minutes, you will have a working, almost blank, React project with development, production and test scripts.

But there's a catch!
React enforces a zero customization policy. Here's a list of major pieces that you can't customize:

Babel
Webpack aliases and plugins
Webpack dev server
PostCSS
ESLint
This is not good for a real life project with a large team since you can't tell a team member they can't update to a new library.

There was another solution called react-app-rewired but the author decided not to update the package so Patrick Lafrance decided to build CRACO.

What is Craco?:

CRACO stands for Create React App Configuration Override. It's a "hacky" layer on top of Create React App (CRA) to customize it's configuration.

This is achieved by overriding the cache of the require calls made by CRA to replace the exported content with the customized configuration.

create-react-app + @craco/craco = awesome


## How to make your users feel welcome to your website

Match logo and color of the PM's specifications if possible. You can use Canva to get the RGB code for it.

1. Login to Canva.
2. Upload PM's image.
3. Right click on the UI to inspect.
4. Copy and paste: background-color: rgb(171, 132, 165)
5. Add it to the SearchForm.js file and importing styles from Ant Design library.


### Technical challenge:

#### Debugging memory leak in Github Jest suite

While updating the styles of the landing page, I encountered the below test error issue.


Debugging Process:

1) Created a merge request to update styles of our landing page for the users to feel welcome.

2) Github PR message "All checks have failed"

3) Click on Details

4) Test and publish test coverage: There's a memory leakage and indicated which file was having the issue.

5) Maybe increasing the size of the node might help but it didn't. When I ran locally, it also ran out of memory. It didn't seem any CI specific issue.

6) Started the Jest test locally, and they had memory leak issue also.

7) Following an article, attached Chrome Memory tool (Debugging Utils) to jest. I took 1 memory snapshot and compared against my local machine (VS Code). The issue didn't seem related to the merge request that I made.

8) Ran all of the tests in sequence, which helps with detecting the memory leaks. Jest is taking more memory over time.

9) A TPL suggested to delete the test file that was causing memory leakage since we are using a source control (Github), it would be easy to revert back if that was not causing the issue.

10) Started on the fix and the problem was solved. I merge my feature branch's PR to the main branch and my teammates were able to do git pull and fix their memory leakage issue also.

