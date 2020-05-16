# Talagent Simulation 

React and Node applications created to demonstrate the following functionality: 

1. Login Page 
    - Default page if not logged-in 
    - Should only accept one combination of username & password
    - If the username or password are not valid, an error message appears
    - If the username and password are valid, the page is redirected to a home page. 
    - The login functionality is done by a post method to the backend application. 
2. Home Page 
    - The home page should display the following in the middle of the screen: 
        1. Username
        2. Date time 
        3. Path of the working directoy that the application is running from 
        4. A logout button 
    - All data should be called from the REST API using get methods 

![](Talagent.gif)

## Installation: 

This application uses Reactjs as the frontend framework, and Node.js as the backend runtime environment. In order to use the application follow these steps: 
1. Open both the file titled 'node' (node app) and the file titled 'talegent' (react app)
2. In the node application: 
    1. Assure that the package.json consists of the following dependencies: 
            "bcrypt": "^4.0.1",
            "cors": "^2.8.5",
            "dotenv": "^8.2.0",
            "express": "^4.17.1",
            "express-router": "0.0.1",
            "jsonwebtoken": "^8.5.1",
            "knex": "^0.21.1",
            "pg": "^8.2.0",
            "router": "^1.3.5"
        If not, install them through npm/ yarn etc. 
    2. Run $createdb RiskManagement (to create the database) 
    3. Run $knex migrate:latest (to migrate the user table)
    4. Either run $nodemon index.js or $npm start index.js (to begin the sever)
3. In the react application: 
    1. Run $npm start (to start the server in your browser) 
4. The application is ready to use!

## Challenges 



