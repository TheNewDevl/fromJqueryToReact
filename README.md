# From JQuery to React

## Introduction

Welcome to From JQuery to React, a project where we switch form a website built with jquery plugins to a full react app.

Repo structure:

- ```apps/``` - contains the [old app version - build with jquery](https://github.com/TheNewDevl/fromJqueryToReact/tree/main/apps/old-version-jquery) and the [Final website - build with react](https://github.com/TheNewDevl/fromJqueryToReact/tree/main/apps/new-version-react) of the website
- ```packages/``` - contains ui components that are used in the React app

Packages:
- ui : It exports ui components that are used in the React app. It is independent as storybook is installed.

## Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

## Installation

To install the project, follow the next steps : 

1. Fork the project
2. Clone the project
3. Open a terminal window in the root of the cloned project
4. Run the following command to install the dependencies:

```bash
# Install dependencies for both packages and apps
npm install
```

## Usage

The ```npm run dev``` command will start the storybook server and the react app server in parallel.
You can also run apps separately.

### jQuery app

To start the jQuery app, just move to the old-version-jquery directory and open the ```index.html``` file in your browser.

### React app

To start the React app, just move to the new-version-react directory and run the following command : ```npm run dev```.

Your frontend client server should now be running at http://127.0.0.1:5173/


###### You can also run ```npm run build``` to build the app and then use serve to serve the build. It is recommended if you want to test the app in production mode and compare performances.

### Ui
To start the storybook server, just move to the ui directory and run the following command : ```npm run dev```.
