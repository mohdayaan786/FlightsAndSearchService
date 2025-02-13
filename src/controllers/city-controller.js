const {CityService} = require('../services/index');

const cityService  = new CityService();

const create =  async (req,res) => {
    try{
       const city = await cityService.createCity(req.body);
       return res.status(201).json({
        data : city,
        success : true,
        message : 'Succesfully created a city',
        err : {}
       });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
       const response = await cityService.deleteCity(req.params.id);
       return res.status(200).json({
        data : response,
        success : true,
        message : 'Succesfully deleted a city',
        err : {}
       });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete a city',
            err : error
        });
    }
}

const update = async (req, res) => {
    try {
        // Extract the name from req.body
        const { name } = req.body;

        // Validate that name is a string
        if (!name || typeof name !== "string") {
            return res.status(400).json({
                data: {},
                success: false,
                message: "City name must be a valid string",
                err: "Invalid input for city name",
            });
        }

        // Call updateCity with the extracted name
        const response = await cityService.updateCity(req.params.id, name);

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city",
            err: {},
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error.message,
        });
    }
}


const get = async (req,res) => {
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
         data : response,
         success : true,
         message : 'Succesfully fetched a city',
         err : {}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to get a city',
            err : error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all the cities',
            err: {}
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all the cities',
            err: error.message || error
        });
    }
};


module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}