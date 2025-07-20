import React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import url from "../const/imagen";

export const InscripcionExitosaTemplate = ({event_id,event_name,event_img,event_descripcion}) => {
  const event_url = `https://Eventm.lat/Eventos/${event_id}`;
  const previewText = `Inscripto a ${event_name} con exito!`

  return (
    <Html>
      <Head />
       <Tailwind
              config={{
                theme: {
                  extend: {
                    colors: {
                      brand: '#2250f4',
                      offwhite: '#fafbfb',
                    },
                    spacing: {
                      0: '0px',
                      20: '20px',
                      45: '45px',
                    },
                  },
                },
              }}
            >
      <Body style={main}>
        <Preview>{previewText}</Preview>
        <Container style={container}>
          <Section>
            <Img
              src={url}
              width="66"
              height="40"
              alt="Eventum"
            />
          </Section>
          <Section>
            <Img
              src={event_img}
              width="120"
              height="120"
              alt={event_name}
              style={EventImage}
            />
          </Section>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={heading}>Inscripto a {event_name} con exito!</Text>
              <Text style={review}>"{event_descripcion}"</Text>
              <Text style={paragraph}>
                Ahora tendras acceso a todo el contenido relacionado al evento {event_name}.
              </Text>
             
              <Button className=" w-full text-center text-lg rounded-lg bg-brand px-[18px] py-3 text-white" href={event_url}>
                Ir al Evento
              </Button>
            </Row>
          </Section>
          <Section>
            <Row>
              <Hr style={hr} />
              <Text style={footer}>
                Eventum, Yerba buena, Tucuman, Argentina
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
    </Html>
  );
};



const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
};

const EventImage = {
  margin: '0 auto',
  marginBottom: '16px',
  borderRadius: '50%',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
};