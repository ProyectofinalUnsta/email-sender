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

export const ArchivoExitoso = ({nombre}) => {
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
        <Preview>Archivo {nombre} subido exitosamente!</Preview>
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
             {nombre} subido exitosamente!
            </Heading>

            <Section>
              <Row>
                <Text style={{color:'black'}} className="text-base">
                {nombre} subido exitosamente, ahora desde la seccion "mis archivos",
                podras ver los archivos subidos por tu cuenta!
                 </Text>
              </Row>
            </Section>

            <Section className="text-center mt-4">
                <Row>
              <Link href="https://www.eventum.lat/MisArchivos" className="rounded-lg bg-brand px-[18px] py-3 text-white">
                Ir a mis archivos
              </Link>
              </Row>
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
