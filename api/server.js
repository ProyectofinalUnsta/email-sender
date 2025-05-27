import express from 'express'
import cors from 'cors'
import  dotenv  from 'dotenv'
import config from '../const/config.js'
import { EmailController } from '../dist/EmailController.js'
dotenv.config()

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin:'*',
    methods:['POST'],
    allowedHeaders:["Content-Type", "Authorization"],
    maxAge:16000
}))


app.get('/', async (req,res)=> {
  try {
     let respuesta = await EmailController.testSend('hola desde servicio', 'finalproyecto36@gmail.com')
  res.status(200).send(respuesta)
  }catch(err){
    res.status(500).send(err)
  }
 
})

app.get('/codigo', async (req,res)=> {
  try {
       let respuesta = await EmailController.TestSendCode('682136cafec96ffeb1f70661','finalproyecto36@gmail.com')
       res.status(200).send(respuesta)
  }catch(err){
    res.status(500).send(err)
  }

  
})





app.listen(config.url ,() => console.log('server is running'))