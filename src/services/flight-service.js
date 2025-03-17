const {FlightRepository, AirplaneRepository } = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw {Error : ("Departure time cannot be greater than arrival time")};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ... data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (err) {
            console.error("Error creating flight:", err);
            throw err;
        }
    }

    async getFlight(id) {
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (err) {
            console.error("Error getting flight by id:", err);
            throw err;
        }
    }

    async getAllFlights(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (err) {
            console.error("Error getting all flights:", err);
            throw err;
        }
    }

    async updateFlight(flightId,data){
        try {
            const reponse = await this.flightRepository.updateFlight(flightId,data);
            return reponse;
        } catch (err) {
            console.error("Error at flight-Service:", err);
            throw err;
        }
    }
    
}

module.exports = FlightService;