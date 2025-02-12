const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository(); 
    }

    async createCity(data) {
        try {
            console.log("Received in CityService:", data); // Debugging

            // Extract only the string value
            if (!data || typeof data.name !== "string") {
                throw new Error("Invalid city name: must be a string");
            }

            // Pass just the string to the repository
            return await this.cityRepository.createCity(data.name);
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
