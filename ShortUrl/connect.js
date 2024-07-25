const mongoose = require("mongoose")

async function connectMongoDb(){
    const url = process.env.MONGODB_URL;
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
}