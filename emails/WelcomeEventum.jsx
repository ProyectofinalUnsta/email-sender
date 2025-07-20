import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
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

export const WelcomeEventum = ({nombre}) => {
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
        <Preview>Bienvenido {nombre} a Eventum!</Preview>
        <Body className="bg-offwhite font-sans text-base mt-4">
          <Img
            src={url}
            width="124"
            height="75"
            alt="Eventum"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading style={{color:'black'}} className="my-0 text-center leading-8">
              Bienvenido {nombre} a Eventum!
            </Heading>

            <Section>
              <Row>
                <Text style={{color:'black'}} className="text-base">
                 Bienvenido a la aplicacion mas completa para la gestion de eventos en la cual
                 podras crear eventos, subir archivos, recibir metricas en tiempo real de los 
                 inscriptos, archivos subidos, lista de disertantes y mucho mas!
                 </Text>

                <Text style={{color:'black'}}  className="text-base">como Empezar:</Text>
              </Row>
            </Section>

            <ul>{EventumWelcomeData.steps?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
              <Link href="https://www.eventum.lat/login" className="rounded-lg bg-brand px-[18px] py-3 text-white">
                Ir al Panel Administrador
              </Link>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="mb-45 text-center text-gray-400">
              @2025 Eventum Yerba buena, Tucuman Argentina
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const EventumWelcomeData = {
  steps: [
    {
      id: 1,
      Description: (
        <li style={{color:'black'}}  className="mb-20" key={1}>
          <strong>Crear tu primer evento.</strong>{' '}
          <Link>Iniciar sesion, dirigirse al panel de administrador </Link>, llenar el formulario
          de crear evento.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li style={{color:'black'}}  className="mb-20" key={2}>
          <strong>Control metricas.</strong> Averigua rapidamente que sucede con tu evento
        haciendo click en metricas y visualiza en tiempo real todo lo relacionado con tu evento
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li style={{color:'black'}}  className="mb-20" key={3}>
          <strong>Subir archivos.</strong> Hace Click en subir archivos,
          subi todo el contenido relacionado con tu evento y previsualizalo antes de subirlo
        </li>
      ),
    },
  ],
};

