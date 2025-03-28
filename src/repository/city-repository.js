const { Op } = require('sequelize');
const { City } = require('../models/index');

class CityRepository {
    async createCity(name) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (err) {
            console.error("Error creating city:", err);
            throw err;
        }
    }

    async createMultipleCities(cities) {
        try {
            const result = await City.bulkCreate(cities);
            return result;
        } catch (err) {
            console.error("Error creating cities:", err);
            throw err;
        }
    }
    async deleteCity(cityId) {
        try {
            const result = await City.destroy({ where: { id: cityId } });
            return result ? { message: "City deleted successfully" } : { message: "City not found" };
        } catch (err) {
            console.error("Error deleting city:", err);
            throw err;
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (err) {
            console.error("Error fetching city:", err);
            throw err;
        }
    }

    async updateCity(cityId, name) {
        try {
            const [updated] = await City.update({ name }, { where: { id: cityId } });
            return updated ? { message: "City updated successfully" } : { message: "City not found" };
        } catch (err) {
            console.error("Error updating city:", err);
            throw err;
        }
    }
    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll(); // Sequelize method to fetch all records
            return cities;
        } catch (err) {
            console.error("Error fetching cities from DB:", err);
            throw err;
        }
    }

}

module.exports = CityRepository;
