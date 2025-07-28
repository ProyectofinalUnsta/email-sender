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
  const {mail,nombre} = req.body
  const destino = mail
  try {
    let respuesta = await EmailController.RegistroAdmin(destino,nombre)
  res.status(200).send(respuesta)
  }catch(err){
    res.status(500).send(err)
  }
 
})

app.post('/codigo', async (req,res)=> {
  const {event_name,event_id,codigo,mail} = req.body
  try {
       let respuesta = await EmailController.obtenerCodigoDisertante(event_name, event_id, codigo, mail)
       res.status(200).send(respuesta)
  }catch(err){
    res.status(500).send(err)
  }
})

app.post('/archivo', async (req,res)=> {
  const {destino,nombre} = req.body
  try {
    let response = await EmailController.archivoSubidoConExito(destino,nombre)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.post('/inscripcion', async (req,res)=> {
  const {destino,event_id,event_name,event_descripcion,event_img} = req.body
  console.log(destino,event_id,event_name,event_descripcion,event_img)
  try {
    let response = await EmailController.inscripcionExitosa(destino,event_id,event_name,event_descripcion,event_img)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})





app.listen(config.url ,() => console.log(`server is running on port ${config.url}`))