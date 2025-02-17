const {AirportService} = require('../services/index2');

const airportService = new AirportService();

class AirportController {
    async createAirport(req, res) {
        try {
            const { name, city_id } = req.body;
            const airport = await airportService.createAirport(name, city_id);
            res.status(201).json(airport);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async deleteAirport(req, res) {
        try {
            const airportId = req.params.id;
            const result = await airportService.deleteAirport(airportId);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getAirport(req, res) {
        try {
            const airportId = req.params.id;
            const airport = await airportService.getAirport(airportId);
            res.status(200).json(airport);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateAirport(req, res) {
        try {
            const airportId = req.params.id;
            const { name, city_id } = req.body;
            const result = await airportService.updateAirport(airportId, name, city_id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getAllAirportsbyCity(req, res) {
        try {
            const city_id = req.params.city_id;
            const airports = await airportService.getAllAirportsbyCity(city_id);
            res.status(200).json(airports);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = AirportController;