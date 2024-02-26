import express from "express";
import cors from 'cors'
import entrenadoresRoutes from './routes/entrenador.routes.js'
//import morgan  from "morgan";

const app = express()

//app.use( morgan('dev'))

app.use( cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/entrenadores', entrenadoresRoutes )

export default app