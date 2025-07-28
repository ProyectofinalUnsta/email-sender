import React from 'react';

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';

import url from '../const/imagen';

  const evento_url = 'https://www.eventum.lat/Eventos/'

export const CodigoDisertante = ({event_name,event_id,event_code}) => (

  <Html>
    <Head />
    <Body style={main}>
      <Preview>Evento {event_id} Creado con exito!</Preview>
      <Container style={container}>
        <Heading style={h1}>Evento {event_name} Creado con exito!</Heading>
        <Link
          href={evento_url}
          target="_blank"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
          }}
        >
       Click Para ver Evento
        </Link>
        <Text style={{ ...text, marginBottom: '14px' }}>
        Codigo para disertantes:
        </Text>
        <code style={code}>{event_code}</code>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          Con este codigo los disertantes podran subir archivos.
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          Tip: Este codigo no puede ser modificado.
        </Text>
        <Img
          src={url}
          width="32"
          height="32"
          alt="Eventum Logo"
        />
        <Text style={footer}>
          <Link
            href="https://Eventumlat"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Eventum.lat
          </Link>
          , eventos al alcance de tus manos
          <br />
          Eventum @2025
        </Text>
      </Container>
    </Body>
  </Html>
);


const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};