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
}

module.exports = FlightService;