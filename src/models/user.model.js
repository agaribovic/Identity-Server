import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: 'Name is required!' },
    email: {
        type: String, trim: true, required: 'Email is required!',
        unique: 'User already exists', match: [/.+\@.+\..+/, 'Invalid email']
    },
    password: { type: String, required: true },
    salt: String,
    enabled: {type: Boolean, default: false},
    created: { type: Date, default: Date.now },
<<<<<<< HEAD
    stringCreated:String,
=======
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
    clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Access' }]
})

UserSchema.virtual('plainText')
    .set(function (plainText) {
        this._password = plainText
        this.salt = this.makeSalt()
        this.password = this.encryptPassword(plainText)
    })
    .get(function () { return this._password })


UserSchema.methods = {
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    },

    encryptPassword: function (plainText) {
        if (!plainText) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(plainText)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },

    authenticate: function (plainText) {
        return this.password === this.encryptPassword(plainText)
    }
}

export default mongoose.model('User', UserSchema)
