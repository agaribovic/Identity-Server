import mongoose, { Schema } from 'mongoose'

const AccessSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    scopes: [{ role: String, action: String, team: String }]
})

export default mongoose.model('Access', AccessSchema)