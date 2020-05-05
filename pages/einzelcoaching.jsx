import React from 'react';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import Header from '../src/Header';
import Head from '../src/Head';


export default function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // eslint-disable-next-line react/prop-types
  const section = ({ headline, paragraph }) => (
    <Box
      bgcolor="background.paper"
      pt={isMobile ? 4 : 8}
    >
      <Container maxWidth={isMobile ? 'xs' : 'md'}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          component="h3"
          color="primary"
        >
          {headline}
        </Typography>
        <Box pt={isMobile ? 2 : 4}>
          {paragraph}
        </Box>
      </Container>
    </Box>
  );

  const sprechtraining = section({
    headline: <>Sprechtraining</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        In sehr vielen Situationen kommt es darauf an, dass wir uns gut präsentieren. Neben einer authentischen Körpersprache kommt es auch auf die deutliche Artikulation und eine angenehme Stimme an. Wir hören Menschen wesentlich lieber zu, die sich deutlich und in einer ansprechenden Art und Weise ausdrücken. Durch das harmonische Zusammenspiel dieser drei Komponenten – Körpersprache, Artikulation und Stimme – können wir sehr viel bewegen. In individuell gestalteten Trainings erfahren Sie Hilfreiches über gesunde Sprechtechniken und die Bedeutung der Körpersprache. Spezielle Übungen helfen Ihnen, deutlicher und wohlklingender zu sprechen.
      </Typography>
    ),
  });

  const entspannungstechniken = section({
    headline: <>Entspannungstechniken</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        In der heutigen, hektischen Zeit leiden viele Menschen unter Stress und Anspannung. Das wirkt meist auch auf unseren Körper aus. Durch das Erlernen gezielter Entspannungstechniken wirken Sie den negativen Einfluss entgegen und gelangen zu mehr Gelassenheit und einem selbstsicherem Auftreten.
      </Typography>
    ),
  });

  const beratung = section({
    headline: <>Beratung zur Lebensplanung</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Jeder Mensch kommt im Laufe seines Lebens an Wendepunkte oder durchlebt diverse Krisen. Das kann ein Arbeitswechsel, eine Trennung, eine schwere Erkrankung oder eine Veränderung der Lebenssituation sein. In dieser Zeit ist es hilfreich, einen neutralen und unabhängigen Berater an der Seite zu haben, der nicht nur eine andere Sichtweise auf die Problematik aufzeigen kann, sondern auch unterstützend und beratend zur Seite steht.
      </Typography>
    ),
  });

  return (
    <>
      <Head title="Einzelcoaching" />
      <Nav />
      <Header
        title="Einzelcoaching"
        image="barley-field.jpg"
        position="50% 65%"
      />
      <Box
        bgcolor="background.paper"
        pb={isMobile ? 4 : 8}
      >
        {sprechtraining}
        {entspannungstechniken}
        {beratung}
      </Box>
      <Footer />
    </>
  );
}
