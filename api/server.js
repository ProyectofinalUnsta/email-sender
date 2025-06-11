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


app.get('/',(req,res)=> {
  res.send('server is working!')
})


app.post('/registro', async (req,res)=> {
  const {mail} = req.body
  try {
     let respuesta = await EmailController.testSend(mail)
  res.status(200).send(respuesta)
  }catch(err){
    res.status(500).send(err)
  }
 
})

app.post('/codigo', async (req,res)=> {
  const {codigo,mail} = req.body
  try {
       let respuesta = await EmailController.TestSendCode(codigo,mail)
       res.status(200).send(respuesta)
  }catch(err){
    res.status(500).send(err)
  }

  
})





app.listen(config.url ,() => console.log('server is running'))