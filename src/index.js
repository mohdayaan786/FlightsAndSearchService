const express = require('express');
const bodyParser = require('body-parser');

const {port} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

setupAndStartServer();