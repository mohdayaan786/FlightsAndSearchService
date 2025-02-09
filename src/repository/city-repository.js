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
            const city = await City.destroy({
                where : {
                    id : cityId
                }
            });
            return city;
        }catch(err){
            throw err;
        }
    }
}

module.exports = new CityRepository();