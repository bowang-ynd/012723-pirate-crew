// import mongoose
const mongoose = require('mongoose');

/* set up mongoose connection */
const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose
    .connect('mongodb+srv://root:root@bowang-ynd.09u58x2.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
    
}

module.exports = connectDB;