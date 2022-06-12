
require('dotenv').config()

module.exports = {
    DEV_MODE: process.env.DEV_MODE, 
    SERVER_PORT: process.env.SERVER_PORT ,
    MONGOOSE_USER: process.env.MONGOOSE_USER , 
    MONGOOSE_PASSWORD: process.env.MONGOOSE_PASSWORD ,
    MONGOOSE_URI: process.env.MONGOOSE_URI
}

