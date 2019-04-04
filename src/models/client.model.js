import mongoose from 'mongoose'

const ClientSchema = mongoose.Schema({
    clientId: String,
    name: {type:String, required:true,unique:true},
    secret: String,

    enabled: { type: Boolean, default: false },

    redirect: {type:String, required:true},
    created: { type: Date, default: Date.now },
    stringCreated:String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Access' }]
})

export default mongoose.model('Client', ClientSchema)