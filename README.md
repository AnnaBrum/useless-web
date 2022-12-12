![black hole](https://media.giphy.com/media/3og0IFrHkIglEOg8Ba/giphy.gif)

# THROW IT INTO NOTHINGNESS

A useless website. Throw stuff into a black hole and watch it disappear.

https://useless-web-weld.vercel.app/

# Installation

Download the files and open index.html in your browser.

# Code Review

1. `script.js:16-19` - These could probably be `const` instead of `let` since they don't change.
2. `script.js:32-35` - Nice random calculation, but the for loop might be unnecessary since it overwrites the value each iteration and will get the last value everytime?
3. `script.js:40` - A parameter is declared but is never read.
4. `style.css:51-66` - These two animations have the same name.
5. `index.html:3-14` - You're missing a link to a favicon, so you get an error in the console.


# Testers

Tested by the following people:

1. Jane Doe
2. John Doe
