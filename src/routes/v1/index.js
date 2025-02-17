const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');

const airportController = new AirportController();

router.post('/airport', airportController.createAirport);
router.delete('/airport/:id', airportController.deleteAirport);
router.get('/airport/:id', airportController.getAirport);
router.patch('/airport/:id', airportController.updateAirport);
router.get('/airports/:city_id', airportController.getAllAirportsbyCity);

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);
router.post('/cities', CityController.createMultiple);

module.exports = router;