#Submitting answers using external libraries using webpack:

It's quite easy.

First you're going to need to install webpack on your machine using

    npm install -g webpack

For more details , refer to the docs:

[http://webpack.github.io/docs/tutorials/getting-started/](http://webpack.github.io/docs/tutorials/getting-started/)


After that, you'll want to bundle your code for the node environment.
First, navigate to the folder where your code exists, then enter the following command:

    webpack --target=node myCodeFile.js myCodeFileBundle.js
    
This will create a single javascript file containing all of the libraries you've required.