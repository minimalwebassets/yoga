/* eslint-disable react/prop-types */
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Fab,
} from '@material-ui/core';
import Link from 'next/link';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import Danke from '../svg/danke.svg';
import Header from '../src/Header';
import Head from '../src/Head';


const useStyles = makeStyles({
  cardIllustration: {
    height: 200,
    width: 'auto',
  },
});

export default function Index() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const section = ({ headline, icon, paragraph }) => (
    <Box
      bgcolor="background.paper"
      pt={isMobile ? 4 : 8}
    >
      <Container maxWidth={isMobile ? 'xs' : 'md'}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          component="h3"
          color="primary"
          align="center"
        >
          {headline}
        </Typography>
        <Box py={isMobile ? 2 : 4}>
          {paragraph}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Box
          align="center"
          py={isMobile ? 4 : 8}
        >
          <Link href="/" passHref>
            <Fab
              component="a"
              variant="extended"
              color="secondary"
            >
              Zurück zur Startseite
            </Fab>
          </Link>
        </Box>
      </Container>
    </Box>
  );

  const danke = section({
    headline: <>Vielen Dank für Ihre Nachricht</>,
    icon: <Danke className={styles.cardIllustration} />,
    paragraph: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="center"
        >
          {/* eslint-disable-next-line max-len */}
          Ich freue mich über Ihre Kontaktaufnahme und komme so bald wie möglich auf Sie zu.
        </Typography>
        <Box py={4}>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="center"
          >
            Beste Grüße,
          </Typography>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="center"
          >
            Angelika Neubauer
          </Typography>
        </Box>
      </>
    ),
  });

  return (
    <>
      <Head title="Danke" />
      <Nav />
      <Header
        title="Kontakt"
        image="abendstimmung-4315445_1920_kckmcx.jpg"
        position="50% 65%"
      />
      {danke}
      <Footer />
    </>
  );
}
