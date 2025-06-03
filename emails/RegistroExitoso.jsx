import url from '../const/imagen.js'
import login from '../const/login.js';
import React from 'react';

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export const RegistroExitoso = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Login</Preview>
      <Container style={container}>
        <Img
          src={url}
          width={55}
          height={55}
          alt="Eventum Team"
        />
        <Heading style={heading}> ✨✨ Registro exitoso! ✨🎉</Heading>
        <Section style={body}>
          <Text style={paragraph}>
             Bienvenido a Eventum!, 
            <Link style={link} href={login}>
              👉 Haz Click para logearte 👈
            </Link>
          </Text>
          <Text style={paragraph}>
          Si no solicito este email por Favor, ignorelo
          </Text>
        </Section>
        <Text style={paragraph}>
          <br />- Eventum Team
        </Text>
        <Hr style={hr} />
        <Img
          src={url}
          width={38}
          height={38}
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
);


const main = {
  background: 'linear-gradient(135deg, #ffffff 0%,rgb(224, 211, 255) 100%)',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/static/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const body = {
  margin: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const link = {
  color: '#FF6363',
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
