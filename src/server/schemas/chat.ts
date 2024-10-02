import mongoose from 'mongoose'

const { Schema } = mongoose

const chatSchema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    chat: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Chat = mongoose.model('Chat', chatSchema)
