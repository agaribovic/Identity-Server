import config from '../config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(config.mongo)
mongoose.connection.on('error', () => { console.log('GRESKA') })

app.listen(config.port, (err) => {
    if(err) console.log(err)
    console.log('Server is running on '+config.IdentityRoute)
})
