const { Op } = require('sequelize');
const { Airport } = require('../models/index');

class AirportRepository {
    async createAirport(name, city_id) {
        try {
            const airport = await Airport.create({ name, city_id });
            return airport;
        } catch (err) {
            console.error("Error creating airport:", err);
            throw err;
        }
    }

    async deleteAirport(airportId) {
        try {
            const result = await Airport.destroy({ where: { id: airportId } });
            return result ? { message: "Airport deleted successfully" } : { message: "Airport not found" };
        } catch (err) {
            console.error("Error deleting airport:", err);
            throw err;
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (err) {
            console.error("Error fetching airport:", err);
            throw err;
        }
    }

    async updateAirport(airportId, name, city_id) {
        try {
            const [updated] = await Airport.update({ name, city_id }, { where: { id: airportId } });
            return updated ? { message: "Airport updated successfully" } : { message: "Airport not found" };
        } catch (err) {
            console.error("Error updating airport:", err);
            throw err;
        }
    }
    
    async getAllAirportsbyCity(city_id) {
        try {
            const airports = await Airport.findAll({
                where: {
                    city_id: city_id
                }
            });
            return airports;
        } catch (err) {
            console.error("Error fetching airports:", err);
            throw err;
        }
    }

}

module.exports = AirportRepository;
