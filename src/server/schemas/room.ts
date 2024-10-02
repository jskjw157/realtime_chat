import mongoose from 'mongoose'

const { Schema } = mongoose
const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    maxUsers: {
        type: Number,
        required: true,
        default: 10,
        min: 1,
        max: 100,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Room = mongoose.model('Room', roomSchema)
