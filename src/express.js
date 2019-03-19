import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/user.router'
import clientRouter from './routes/client.router'
import accessRouter from './routes/access.router'
import authRouter from './routes/auth.router'
import webRouter from './routes/web.routes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', userRouter)
app.use('/', clientRouter)
app.use('/', accessRouter)
app.use('/', authRouter)
webRouter(app)

export default app