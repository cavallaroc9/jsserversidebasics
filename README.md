# JS Server Basics featuring Express & Node

## Prerequisites
- A desire to think about and learn about JS running on the server
- Some understanding of HTTP and how web pages behave

## Getting Started

```
# Set up your .env file
cp .env.example .env

# Install the project dependencies
npm install

# Start the application
npm run dev:watch
```

The application will start on port 3000 by default. The host by default is `0.0.0.0` which is interpreted by macs to be `localhost`. Please
feel free to update your `.env` to use what you prefer. If you update your `.env` you will have to restart the application.

## Environmental Variables

The `.env.example` file contains most of what you need to know to configure your local environment. This is a very basic configuration
and is used to give you an idea of how you could add complex configuration to any application.

## Topics

- Basic implementation of a node server. 
- Express and REST endpoints. 

## Reading Materials
* [Server Side JS?](http://www.zdnet.com/article/javascript-explodes-on-the-server-side-with-the-growth-of-node-js/)
* [Why Node?](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
* [Express?](https://expressjs.com/)