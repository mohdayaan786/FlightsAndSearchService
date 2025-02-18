const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(name, city_id) {
        try {
            const airport = await this.airportRepository.createAirport(name, city_id);
            return airport;
        } catch (err) {
            console.error("Error creating airport:", err);
            throw err;
        }
    }

    async deleteAirport(airportId) {
        try {
            const result = await this.airportRepository.deleteAirport(airportId);
            return result;
        } catch (err) {
            console.error("Error deleting airport:", err);
            throw err;
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (err) {
            console.error("Error fetching airport:", err);
            throw err;
        }
    }

    async updateAirport(airportId, name, city_id) {
        try {
            const result = await this.airportRepository.updateAirport(airportId, name, city_id);
            return result;
        } catch (err) {
            console.error("Error updating airport:", err);
            throw err;
        }
    }

    async getAllAirportsbyCity(city_id) {
        try {
            const airports = await this.airportRepository.getAllAirportsbyCity(city_id);
            return airports;
        } catch (err) {
            console.error("Error fetching airports:", err);
            throw err;
        }
    }
}



module.exports = AirportService;
