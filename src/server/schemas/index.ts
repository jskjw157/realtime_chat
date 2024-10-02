import mongoose from 'mongoose'
import { Chat } from './chat'
import { Room } from './room'
import { User } from './user'

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = Bun.env
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`

export const mongoConnect = async () => {
    const connect = async () => {
        if (mongoose.connection.readyState === 1) {
            return
        }
        if (NODE_ENV !== 'production') {
            mongoose.set('debug', true)
        }
        try {
            await mongoose.connect(MONGO_URL, {
                dbName: 'realtime_chat',
            })
            console.log('MongoDB connected')
        } catch (error) {
            console.error(error)
        }
    }

    await connect()

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db')
    })

    mongoose.connection.on('error', (error) => {
        console.error(error)
    })
    mongoose.connection.on('disconnected', async () => {
        console.log('Mongoose disconnected')
        await connect()
    })

    const schemas = {
        Chat,
        Room,
        User,
    }

    return schemas
}
