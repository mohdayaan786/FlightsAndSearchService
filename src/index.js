const express = require('express');

const {port} = require('./config/serverConfig');

const setupAndStartServer = async () => {
    const app = express();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

setupAndStartServer();