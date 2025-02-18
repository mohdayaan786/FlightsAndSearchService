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

module.exports = {
    create
};