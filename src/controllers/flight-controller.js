const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        res.status(201).json({
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
        res.status(200).json({
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
        res.status(200).json({
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

module.exports = {
    create,
    get,
    getAll
};