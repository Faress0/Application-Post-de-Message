const mongoose = require('mongoose');

class Connection {
    static async create() {
        const url = 'mongodb+srv://fares:fares@cluster0.eciolnd.mongodb.net/Cluster0?retryWrites=true&w=majority';
        try {
            await mongoose.connect(url, { useNewUrlParser: true });
            console.log('Connected to MongoDB');
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = Connection;

