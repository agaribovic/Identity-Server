import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/user.router'
import clientRouter from './routes/client.router'
import accessRouter from './routes/access.router'
import authRouter from './routes/auth.router'
import webRouter from './routes/web.routes'

//import logger from './helpers/logger';


// const logStart = (req, res, next) =>{
//     let prefix = parseInt(res.statusCode / 100, 10);
//     let message = `Method: ${req.method}, Url : ${req.originalUrl}, Response: ${res.status}`;
//     if(prefix <= 2){
//         logger.info(message)
//     }else{
//         logger.error(message)
//     }
//     next ()
// }

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', userRouter)
app.use('/', clientRouter)
app.use('/', accessRouter)
app.use('/', authRouter)

app.use(express.static(__dirname + 'views'))
//app.use('/',logStart)


webRouter(app)

export default app