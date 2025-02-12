const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository(); // Instantiate the repository
    }

    async createCity(name) {
        try {
            const city = await this.cityRepository.createCity(name);
            return city;
        } catch (err) {
            console.error("Error creating city:", err);
            throw err;
        }
    }

    async deleteCity(cityId) {
        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return city;
        } catch (err) {
            console.error("Error deleting city:", err);
            throw err;
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (err) {
            console.error("Error fetching city:", err);
            throw err;
        }
    }

    async updateCity(cityId, name) {
        try {
            const city = await this.cityRepository.updateCity(cityId, name);
            return city;
        } catch (err) {
            console.error("Error updating city:", err);
            throw err;
        }
    }
}

module.exports = CityService; // Export the service for use in other parts of the app
