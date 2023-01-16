const mongoose = require('mongoose');
let Connection = require('../config/mongodb')

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

class Messages {
    static async create(content) {
        if (!content) {
            throw new Error("Content is required");
        }
        try {
            await Connection.create();
            const message = new Message({ content });
            const errors = message.validateSync();
            if (errors) {
                console.error(errors);
                throw new Error('Validation error');
            }
            await message.save();
            return message;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Messages;