# Welcome to flights Service

## Project Setup

 - clone the project on the local machine
 - Execute `npm install` on the same path as of root directory of the downloaded project.
 - Create a `.env` file in the root directory and add the following environment variable:
    - `Port = 3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of JSON.

 ```
  {
  "development": {
    "username": "root",
    "password": "<Your DB Password>",
    "database": "Flights_Search_DB-DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```

 - Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` 

 ## DB Design

 - Airplane Table
 - Flight
 - Airport
 - City

 - A flight belongs to an airplane but one airplane can be used in multiple flights.
 - A city has many airports but one airport belongs to a city.
 - One airport can have many flights, but a flight belongs to one airport.

 ## Tables 

 ### City -> id, name, createdAt, updatedAt
 ### Airport -> id, name, address, city_id, createdAt, updatedAt
    Relationship -> City has many airports and Airport belongs to a city (one to many)

    ```
    npx sequelize-cli model:generate --name Airport --attributes name:string,address:string,city_id:integer
    ```

