import React from 'react';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
} from '@material-ui/core';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import url from '../src/cloudinary';
import Header from '../src/Header';
import Head from '../src/Head';


export default function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const crop = {
    height: 200,
    width: 300,
    crop: 'fit',
    radius: 10,
  };

  // eslint-disable-next-line react/prop-types
  const section = ({ picture, headline, paragraph, isFlip }) => {
    const picturePadding = isMobile ? 0 : 6;
    const pictureBox = (
      <Box
        pl={isFlip ? 0 : picturePadding}
        pr={isFlip ? picturePadding : 0}
        mt={isMobile ? 4 : 0}
      >
        {picture}
      </Box>
    );
    return (
      <Container maxWidth={isMobile ? 'xs' : 'lg'}>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          py={isMobile ? 6 : 12}
          alignItems="center"
          mx={2}
        >
          {isFlip && !isMobile && pictureBox}
          <Box>
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
          </Box>
          {(!isFlip || isMobile) && pictureBox}
        </Box>
      </Container>
    );
  };

  const vorgespraech = section({
    isFlip: false,
    picture: <img src={url('old-phone-1672766_1920_womdcp.jpg', crop)} alt="Old Phone" />,
    headline: <>Vorgespräch</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Wir vereinbaren bei Interesse ein erstes Vorgespräch – telefonisch oder persönlich, bei dem Ihre Fragen beantworten werden und die weitere Vorgehensweise besprochen wird. Dieses Vorgespräch ist für Sie kostenlos, bei Anfahrten ab 20 km erhebe ich lediglich die Fahrtkosten.
      </Typography>
    ),
  });

  const ablauf = section({
    isFlip: true,
    picture: <img src={url('clock-1274699_1920_xoichl.jpg', crop)} alt="Clock" />,
    headline: <>Ablauf</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Den Ablauf des Coachings gestalten wir gemeinsam und individuell. In einem ersten Schritt werden die Wünsche bezüglich der Themen und der Dauer der Treffen abgeklärt. Danach werden die Vorgehensweise und Inhalte vereinbart und schriftlich festgehalten. Da jeder Mensch andere Bedürfnisse hat, gestalte ich den Ablauf des Coachings in Absprache so, dass sie eine bestmögliche Unterstützung für die jeweilige(n) Person(en) darstellen.
      </Typography>
    ),
  });

  const preis = section({
    isFlip: false,
    picture: <img src={url('fountain-pen-447576_1920_u3zlnw.jpg', crop)} alt="Fountain Pen" />,
    headline: <>Kontaktaufnahme und Preis</>,
    paragraph: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Bei Fragen zu den Einzel- oder Gruppencoachings füllen Sie bitte das Kontakfomular aus oder Sie kontaktieren mich telefonisch oder per Mail. Sie werden zeitnah eine Antwort erhalten, je nach Wunsch schriftlich oder telefonisch.
        </Typography>
        <Box mt={1}>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="left"
          >
            {/* eslint-disable-next-line max-len */}
            Der Preis richtet sich nach der Art des Angebots und der Größe der Gruppe. Genauere Informationen erhalten Sie nach der ersten Kontaktaufnahme.
          </Typography>
        </Box>
      </>
    ),
  });

  return (
    <>
      <Head title="Organisatorisches" />
      <Nav />
      <Header
        title="Organisatorisches"
        image="balance-110850_hacpoy.jpg"
        position="50% 60%"
      />
      {vorgespraech}
      <Divider />
      {ablauf}
      <Divider />
      {preis}
      <Footer />
    </>
  );
}
