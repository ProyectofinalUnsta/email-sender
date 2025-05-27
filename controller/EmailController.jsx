import { Resend } from 'resend';
import React from 'react';
import config from '../const/config.js';
import { RegistroExitoso } from '../emails/RegistroExitoso.jsx';
import { CodigoDisertante } from '../emails/CodigoDisertante.jsx';

const resend = new Resend(config.resendKey);


export class EmailController  {
  static async testSend (msj,destino) {
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: destino,
            subject:'Test from service',
            react: <RegistroExitoso msj={msj}/>
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
            from: 'onboarding@resend.dev',
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
