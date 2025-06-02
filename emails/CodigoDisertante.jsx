import React from 'react';
import url from '../const/imagen';
import { Body,Container,Head,Heading,Html,Img,Link,Section,Text,Hr } from '@react-email/components';

export const CodigoDisertante = ({codigo}) => {

return(
 <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={url}
          width="112"
          height="88"
          alt="Plaid"
          style={logo}
        />
        <Text style={tertiary}>Evento Creado con exito!</Text>
        <Heading style={secondary}>
          Este código permite subir archivos fácilmente desde la plataforma.
        </Heading>
        <Section style={codeContainer}>
          <Text style={code}>{codigo}</Text>
        </Section>
        <Text style={paragraph}>No esperaba este Email?</Text>
        <Text style={paragraph}>
          Contactarse{' '}
          <Link href="finalproyecto36@gmail.com" style={link}>
            finalproyecto36@gmail.com
          </Link>{' '}
         Si no solicito este codigo
        </Text>
        <Hr style={hr} />
        <Img
          src={url}
          width={38}
          height={28}
          style={{
            WebkitFilter: 'grayscale(100%)',
            filter: 'grayscale(100%)',
            margin: '20px 0',
          }}
        />
        <Text style={footer}>Eventum Team @2025.</Text>
        <Text style={footer}>
        Yerba buena, Tucuman Argentina
        </Text>
      </Container>
    </Body>
  </Html>
)
}




const main = {
  background: 'linear-gradient(135deg, #ffffff 0%,rgb(237, 230, 255) 100%)',
  fontFamily: 'Arial,sans-serif',
};

const container = {
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '68px 0 130px',
};

const logo = {
  margin: '0 auto',
};

const tertiary = {
   color: '#FF6363',
  fontSize: '14px',
  fontWeight: 700,
  fontFamily: 'Arial,sans-serif',
  height: '16px',
  letterSpacing: '0',
  lineHeight: '16px',
  margin: '16px 8px 8px 8px',
  textAlign: 'center' ,
};

const secondary = {
  color: '#000',
  display: 'inline-block',
  fontFamily: 'Arial,sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0',
  marginTop: '0',
  textAlign: 'center',
};

const codeContainer = {
  background: 'rgb(255, 255, 255)',
  borderRadius: '8px',
  margin: '16px auto 14px',
  verticalAlign: 'middle',
  width: '300px',
};

const code = {
  color: '#333',
  fontFamily: 'Arial,sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '6px',
  lineHeight: '30px',
  paddingBottom: '8px',
  paddingTop: '8px',
  paddingLeft:'8px',
  margin: '0 auto',
  display: 'block',
  textAlign: 'center',
};

const paragraph = {
  color: '#444',
  fontSize: '15px',
  fontFamily: 'Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '23px',
  padding: '0 40px',
  margin: '0',
  textAlign: 'center',
};

const link = {
  color: '#FF6363',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
};
