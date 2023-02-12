# Project Structure
* `public/`: this folder contains the index.html file where the compiled Javascript is included, and also where you can tweak the page attributes, such as the title, attribute, favicon, and many other. You can also add assets such as images here, but we recommend including assets via the import feature from the src/ folder;
* `src/`: in this folder most of the code will be located as it is the source of the application. Assets, components, data, pages, routing, and even the stylesheets can be found here;
* `src/assets/`: this is the folder where you should include images, fonts, and any other static assets that you’ll be importing into your app;
* `src/components/`: in this folder we recommend building new components that you will use as UI elements throughout your project;
* `src/data/`: this is the folder where the data should come from. The data folder should contain the API calls for the backend of your application;
* `src/pages/`: this folder contains the pages of your application which are registered as routes in the routes.js file;
* `src/scss/`: here you can write and modify the stylesheet of your application, but also change the Sass variables and mixins to easily change the appearance of the project seamlessly;
* `src/index.js`: this is the main wrapper file where the routing and the base layout of the project is sticked together;
* `src/routes.js`: this is the file where you first declare the routes of the application, and later register in the Homepage.js component which will render from the index.js file;
* `package.json`: this is an important file that contains the project dependencies, the base URL for the project when building the production code, and also some useful scripts that you can use via NPM;
* `node_modules/`: this is the folder where all dependencies will be installed after running yarn install;
