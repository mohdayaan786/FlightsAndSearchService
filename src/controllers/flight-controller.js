const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            airplaneId: req.body.airplaneId,
            flightNumber: req.body.flightNumber,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        res.status(SuccessCodes.CREATED).json({
            data : flight,
            message : "Flight created successfully",
            success : true,
            err : {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: err
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        res.status(SuccessCodes.OK).json({
            data : flight,
            message : "Flight fetched successfully",
            success : true,
            err : {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: err
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        res.status(SuccessCodes.OK).json({
            data : flights,
            message : "All flights fetched successfully",
            success : true,
            err : {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch all flights',
            err: err
        });
    }
}

const update = async(req,res) => {
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        res.status(SuccessCodes.OK).json({
            data : response,
            message : "Flight updated successfully",
            success : true,
            err : {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: err
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
};