import { Resend } from 'resend';
import React from 'react';
import config from '../const/config.js';
import { WelcomeEventum } from '../emails/WelcomeEventum.jsx';
import { CodigoDisertante } from '../emails/CodigoDisertante.jsx';
import { ArchivoExitoso } from '../emails/ArchivoExitoso.jsx';
import { InscripcionExitosaTemplate } from '../emails/InscripcionExitosa.jsx';
const resend = new Resend('re_17i3JyTT_7ETQEn5zSTomr75QqAHh1LbD');

export class EmailController  {
  static async RegistroAdmin (destino,nombre) {
    try {
        const data = await resend.emails.send({
            from: config.sender,
            to: destino,
            subject:'Registro Eventum',
            react: <WelcomeEventum nombre={nombre}/>
        })
        return data
    }
    catch(err){
        return err
    }
  }
  static async obtenerCodigoDisertante (event_name,event_id,codigo,destino) {
     try {
        const data = await resend.emails.send({
            from: config.sender,
            to: destino,
            subject:'Codigo de Evento',
            react: <CodigoDisertante event_code={codigo} event_id={event_id} event_name={event_name}/>
        })
        return data
    }
    catch(err){
        return err
    }
  }
  static async archivoSubidoConExito  (destino,nombre) {
   try {
    const data = await resend.emails.send({
         from: config.sender,
            to: destino,
            subject:'Archivo subido',
            react: <ArchivoExitoso nombre={nombre}/>
    })
    return data
   } catch (err) {
    return err
   }
  }

  static async inscripcionExitosa (destino, event_id,event_name,event_descripcion,event_img) {
   try {
    const data = await resend.emails.send({
         from: config.sender,
            to: destino,
            subject:'Archivo subido',
            react: <InscripcionExitosaTemplate   event_id={event_id} event_name={event_name} event_descripcion={event_descripcion}  event_img={event_img}/>
    })
    return data
   } catch (err) {
    return err
   }
  }


}
