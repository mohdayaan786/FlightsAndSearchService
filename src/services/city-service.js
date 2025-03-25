const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            console.log("Received in CityService:", data); 
            if (!data || typeof data.name !== "string") {
                throw new Error("Invalid city name: must be a string");
            }
            return await this.cityRepository.createCity(data.name);
        } catch (err) {
            console.error("Error creating city:", err);
            throw err;
        }
    }

    async createMultipleCities(cities) {
        try {
            const result = await this.cityRepository.createMultipleCities(cities);
            return result;
        } catch (err) {
            console.error("Error creating cities:", err);
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

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({ name: filter.name }); 
            return cities;
        } catch (err) {
            console.error("Error fetching cities:", err);
            throw err;
        }
    }
}

module.exports = CityService; 
