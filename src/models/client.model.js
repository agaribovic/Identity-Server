import mongoose from 'mongoose'

const ClientSchema = mongoose.Schema({
    clientId: String,
    name: String,
    secret: String,

    enabled: { type: Boolean, default: false },

    redirect: String,
    created: { type: Date, default: Date.now },
    stringCreated:String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Access' }]
})

export default mongoose.model('Client', ClientSchema)