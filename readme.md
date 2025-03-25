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

## 🗄️ Database Design

The project follows a relational database model with the following tables:

### **1️⃣ City Table**
**Columns:** `id`, `name`, `createdAt`, `updatedAt`

### **2️⃣ Airport Table**
**Columns:** `id`, `name`, `address`, `city_id`, `createdAt`, `updatedAt`

**Relationships:**
- A **city** has many airports.
- An **airport** belongs to a single city (One-to-Many relationship).

**Sequelize Model Generation Command:**
```sh
npx sequelize-cli model:generate --name Airport --attributes name:string,address:string,city_id:integer
```

### **3️⃣ Airplane Table**

### **4️⃣ Flight Table**

**Relationships:**
- A **flight** belongs to an **airplane**, but one airplane can be used in multiple flights.
- An **airport** can have many flights, but a **flight** belongs to only one airport.

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

