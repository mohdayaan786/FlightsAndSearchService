const { Flight } = require('../models/index');  
const { Op } = require('sequelize');

class FlightRepository {

     #createFilter(data) {
        let filter = {};
        
        if(data.minprice){
            Object.assign(filter, {price: {[Op.gte]: data.minprice}});
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.maxprice){
            Object.assign(filter, {price: {[Op.lte]: data.maxprice}});
        }
        if(data.minprice && data.maxprice){
            Object.assign(filter, {price: {[Op.between]: [data.minprice, data.maxprice]}});
        }
        return filter;
     }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (err) {
            console.error("Error creating flight:", err);
            throw err;
        }
    }
    
    async getFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (err) {
            console.error("Error getting flight by id:", err);
            throw err;
        }
    }

    async getAllFlights(data) {
        try {
            const filter = this.#createFilter(data);
            const flights = await Flight.findAll({where: filter});
            return flights;
        } catch (err) {
            console.error("Error getting all flights:", err);
            throw err;
        }
    }

    async updateFlight(flightId,data){
        try{
            await Flight.update(data,{
                where : {
                    id : flightId
                }
            });
        }
        catch(err){
            console.error("Error updating the flights:", err);
            throw err;
        }
    }
}


module.exports = FlightRepository;  