import mongoose from 'mongoose'

const ClientSchema = mongoose.Schema({
    clientId: String,
    name: String,
    secret: String,
<<<<<<< HEAD
    enabled: { type: Boolean, default: false },
=======
    enabled: Boolean,
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
    redirect: String,
    created: { type: Date, default: Date.now },
    stringCreated:String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Access' }]
})

export default mongoose.model('Client', ClientSchema)