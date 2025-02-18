const {Flight} = require('../models/index');  // Import the Flight model

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (err) {
            console.error("Error creating flight:", err);
            throw err;
        }
    }
}

module.exports = FlightRepository;  // Export the FlightRepository class