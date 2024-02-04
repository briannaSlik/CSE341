const dotenv = require('dotenv');
dotenv.config()

const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.URL);
    const db = mongoose.connection;

    db.on('errror', (error) => console.log(error))
    db.once('open', () => console.log('Database connected'))
}


module.exports = { connectDB };