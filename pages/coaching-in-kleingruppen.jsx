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

  const kommunikationstraining = section({
    headline: <>Kommunikationstraining</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Ohne Kommunikation funktioniert das Miteinander der Menschen nicht. Wichtig ist es – privat und beruflich – den richtigen Ton zu treffen, förderliche Kommunikationsstrategien zu kennen und Manipulationsversuche zu erkennen. Eine gute Kommunikation lässt das Miteinander spannungsärmer und effektiver werden. Dazu müssen Grundlagen guter Kommunikation erlernt und trainiert werden.
      </Typography>
    ),
  });

  const begleitung = section({
    headline: <>Begleitung verschiedener Gruppenprozesse</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Jedes Team durchläuft verschiedene Prozesse. Diese verlaufen nicht immer reibungslos. Als unabhängige Beraterin begleite ich die verschiedenen Gruppenprozesse und stehe beratend zur Seite.
      </Typography>
    ),
  });

  return (
    <>
      <Head title="Coaching in Kleingruppen" />
      <Nav />
      <Header
        title="Coaching in Kleingruppen"
        image="plume-2428666_1920_l2gnyn.jpg"
        position="50% 65%"
        titleVariantMobile="h6"
      />
      <Box
        bgcolor="background.paper"
        pb={isMobile ? 4 : 8}
      >
        {kommunikationstraining}
        {begleitung}
      </Box>
      <Footer />
    </>
  );
}
