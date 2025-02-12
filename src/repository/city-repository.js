const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(err){
            throw err;
        }
    }

    async deleteCity({cityId}){
        try{
            const city = await City.destroy({cityId});
            return city;
        }catch(err){
            throw err;
        }
    }

    async getCity({cityId}){
        try{
            const city = await City.findByPk({cityId});
            return city;
        }catch(err){
            throw err;
        }
    }

    async updateCity({cityId, name}){
        try{
            const city = await City.update({name}, {where : {cityId}});
            return city;
        }catch(err){
            throw err;
        }
    }
}

module.exports = new CityRepository();