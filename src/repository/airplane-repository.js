const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (err) {
            console.error("Error getting airplane by id:", err);
            throw err;
        }
    }
}

module.exports = AirplaneRepository;  // Export the AirplaneRepository class