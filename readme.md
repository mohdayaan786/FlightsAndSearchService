# ✈️ Welcome to Flights Service

This project provides a backend service for managing flights, including airplanes, airports, cities, and flight details.

## 🚀 Project Setup

Follow these steps to set up the project on your local machine:

### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd <repository-folder>
```

### 2️⃣ Install Dependencies
Run the following command in the root directory:
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following variable:
```
PORT=3000
```

### 4️⃣ Configure Database
1. Inside the `src/config` folder, create a new file called `config.json`.
2. Add the following JSON configuration:
```json
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

### 5️⃣ Create the Database
Once the database configuration is set up, navigate to the `src` folder and run:
```sh
npx sequelize db:create
```

## 🛤️ API Routes

The service provides RESTful endpoints to manage cities, airports, and flights.

### **📍 Airport Routes**
| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | `/airport`            | Create a new airport                |
| DELETE | `/airport/:id`        | Delete an airport by ID             |
| GET    | `/airport/:id`        | Get details of an airport by ID     |
| PATCH  | `/airport/:id`        | Update airport details by ID        |
| GET    | `/airports/:city_id`  | Get all airports in a specific city |

### **🏙️ City Routes**
| Method | Endpoint              | Description                               |
|--------|-----------------------|-------------------------------------------|
| POST   | `/city`               | Create a new city                        |
| DELETE | `/city/:id`           | Delete a city by ID                      |
| GET    | `/city/:id`           | Get details of a city by ID              |
| PATCH  | `/city/:id`           | Update city details by ID                |
| GET    | `/city`               | Get all cities                           |
| POST   | `/cities`             | Create multiple cities in one request    |

### **🛫 Flight Routes**
| Method | Endpoint         | Description                         |
|--------|-----------------|-------------------------------------|
| POST   | `/flight`       | Create a new flight (with validation) |
| GET    | `/flights`      | Get all available flights          |
| GET    | `/flight/:id`   | Get details of a flight by ID      |
| PATCH  | `/flight/:id`   | Update flight details by ID        |

## 🗄️ Database Design

The project follows a relational database model with the following tables:

### **1️⃣ City Table**
| Column    | Type         | Constraints    |
|-----------|-------------|---------------|
| id        | int         | Primary Key, Auto Increment |
| name      | varchar(255)| Unique, Not Null |
| createdAt | datetime    | Not Null       |
| updatedAt | datetime    | Not Null       |

### **2️⃣ Airport Table**
| Column    | Type         | Constraints    |
|-----------|-------------|---------------|
| id        | int         | Primary Key, Auto Increment |
| name      | varchar(255)| Not Null      |
| address   | varchar(255)| Nullable      |
| city_id   | int         | Foreign Key (City) |
| createdAt | datetime    | Not Null       |
| updatedAt | datetime    | Not Null       |

**Relationships:**
- A **city** has many airports.
- An **airport** belongs to a single city (One-to-Many relationship).

### **3️⃣ Airplane Table**
| Column        | Type         | Constraints    |
|--------------|-------------|---------------|
| id           | int         | Primary Key, Auto Increment |
| modelNumber  | varchar(255)| Not Null      |
| capacity     | int         | Default: 200  |
| createdAt    | datetime    | Not Null      |
| updatedAt    | datetime    | Not Null      |

### **4️⃣ Flight Table**
| Column            | Type         | Constraints    |
|------------------|-------------|---------------|
| id               | int         | Primary Key, Auto Increment |
| flightNumber     | varchar(255)| Unique, Not Null |
| airplaneId       | int         | Foreign Key (Airplane) |
| departureAirportId | int       | Foreign Key (Airport) |
| arrivalAirportId  | int       | Foreign Key (Airport) |
| arrivalTime      | datetime    | Not Null      |
| departureTime    | datetime    | Not Null      |
| price           | float       | Not Null      |
| boardingGate     | varchar(255)| Nullable      |
| totalSeats       | int         | Not Null      |
| createdAt        | datetime    | Not Null      |
| updatedAt        | datetime    | Not Null      |

**Relationships:**
- A **flight** belongs to an **airplane**, but one airplane can be used in multiple flights.
- A **flight** has a departure and arrival airport, both linked to the **Airport** table.

## ✅ Next Steps
- Run database migrations: `npx sequelize db:migrate`
- Start the server: `npm start`
- Use API routes to manage flights and airport services.

---

### 📌 Notes
- Make sure you have MySQL installed and running before setting up the database.
- Keep your `.env` file secure and do not commit it to version control.
- Follow proper naming conventions when defining environment variables (`PORT` instead of `Port`).

📢 Feel free to contribute and improve this service! 🚀

