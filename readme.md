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