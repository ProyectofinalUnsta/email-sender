import { Resend } from 'resend';
import React from 'react';
import config from '../const/config.js';
import { RegistroExitoso } from '../emails/RegistroExitoso.jsx';
import { CodigoDisertante } from '../emails/CodigoDisertante.jsx';

const resend = new Resend('re_17i3JyTT_7ETQEn5zSTomr75QqAHh1LbD');

export class EmailController  {
  static async testSend (destino) {
    try {
        const data = await resend.emails.send({
            from: config.sender,
            to: destino,
            subject:'Registro Eventum',
            react: <RegistroExitoso/>
        })
        return data
    }
    catch(err){
        return err
    }
  }
  static async TestSendCode (codigo,destino) {
     try {
        const data = await resend.emails.send({
            from: config.sender,
            to: destino,
            subject:'Codigo de Evento',
            react: <CodigoDisertante codigo={codigo}/>
        })
        return data
    }
    catch(err){
        return err
    }
  }
}
