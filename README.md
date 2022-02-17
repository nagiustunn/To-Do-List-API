# To Do List API
 To Do List API with Express.js, Node,js and MongoDb
 
 # Getting Started
 To get the Node server running locally:
- Clone this repo
- npm install to install all required dependencies
- Create MongoDb Cluster and Get Connection MongoDb URI
- Set environment variables in config.env under ./config/env

  * Set MONGO_URI = <YOUR_MONGO_URI>
  * and you can also change the port if you want.
  
- npm start to start the local server


# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to JavaScript
- [dotenv](https://github.com/motdotla/dotenv) - Zero-Dependency module that loads environment variables
- [cors](https://github.com/expressjs/cors) - Cors middleware to enable cross-domain communication with browser apps of different origins
- [body-parser](https://github.com/expressjs/body-parser) - Express body-parser is an npm library used to process data sent through an HTTP request body. 

## Application Structure

- `server.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also inncludes the routes we'll be using in the application.
- `config/` - This folder contains configuration for central location environment variables and other configurations.
- `routers/` - This folder contains the route definitions (todo) for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models (Todo).
- `controllers/` - This folder contains controllers for our API.
- `middlewares/` - This folder contains middlewares for our API.
- `helpers/` - This folder contains helper functions for adapting 3rd party libraries for our API.

## Error Handling

In `middlewares/errors/errorHandler.js`, we define a error-handling middleware for handling Mongoose's errors and our own errors.
