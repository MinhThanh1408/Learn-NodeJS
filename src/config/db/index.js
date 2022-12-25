const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8-Education', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };

//Connect Database
