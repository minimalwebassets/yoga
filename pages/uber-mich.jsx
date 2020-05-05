/* eslint-disable react/prop-types */
import React from 'react';
import {
  makeStyles,
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


const useStyles = makeStyles({
  floatingImage: {
    float: 'left',
  },
});

export default function Index() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sectionA = ({
    picture,
    paragraph1,
    paragraph2,
    paragraph3,
  }) => (
    <Container maxWidth={isMobile ? 'xs' : 'md'}>
      <Box pt={isMobile ? 2 : 8}>
        <Box
          className={isMobile ? '' : styles.floatingImage}
          pr={isMobile ? 0 : 4}
          display={isMobile ? 'flex' : 'block'}
          justifyContent="center"
        >
          {picture}
        </Box>
        <Box>
          <Box pt={isMobile ? 2 : 2}>
            {paragraph1}
          </Box>
          <Box pt={isMobile ? 2 : 4}>
            {paragraph2}
          </Box>
          <Box pt={isMobile ? 2 : 4}>
            {paragraph3}
          </Box>
        </Box>
      </Box>
    </Container>
  );

  // eslint-disable-next-line react/prop-types
  const sectionB = ({
    headline1,
    headline2,
    headline3,
    paragraph1,
    paragraph2,
    paragraph3,
  }) => (
    <Container maxWidth={isMobile ? 'xs' : 'md'}>
      <Box
        pt={isMobile ? 2 : 4}
        pb={isMobile ? 4 : 8}
      >
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline1}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph1}
        </Box>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline2}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph2}
        </Box>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline3}
        </Typography>
        <Box pt={isMobile ? 1 : 2}>
          {paragraph3}
        </Box>
      </Box>
    </Container>
  );

  const firstPart = sectionA({
    picture: <img
      src={url('Bewerbungsfoto_Neubauer_rpo86s.jpg', { height: 400, crop: 'scale' })}
      alt="Angelika Neubauer"
    />,
    paragraph1: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Ich möchte mich kurz vorstellen: mein Name ist Angelika Neubauer. Ich wohne mit meinem Mann in der Nähe von Nürnberg. Dort genieße ich das Leben auf dem Land sowie die schnelle Anbindung an die Stadt. Meine beiden Kinder sind mittlerweile erwachsen und gehen ihre eigenen Wege.
      </Typography>
    ),
    paragraph2: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Mir war es immer schon ein Anliegen, andere Menschen zu unterstützen, ihr Leben bestmöglichst zu gestalten. Ich bin seit über 20 Jahren im pädagogischen Bereich tätig. Mich beschäftigte zunehmend die Tatsache, dass die Kommunikation auf den verschiedenensten Ebenen einen Schwachpunkt darstellt. Sehr häufig führt sie zu Missverständnissen und Problemen. „Eine gelungene Kommunikation ist die halbe Miete.“
      </Typography>
    ),
    paragraph3: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Diese Erkenntnis führte mich dazu, mich verstärkt in diesem Bereich weiterzubilden, was letztendlich in der Absolvierung eines Studiums in Speech Communication and Rhetoric mündete. Deshalb erwarb ich zu meiner pädagogischen Ausbildung noch folgende Qualifikationen hinzu:
      </Typography>
    ),
  });

  const secondPart = sectionB({
    headline1: <>Sprecherzieherin (DGSS)</>,
    /* eslint-disable-next-line max-len */
    headline2: <>Master of Arts „Speech Communication and Rhetoric“ in Sprechwissenschaft und Sprecherziehung (M.A.)</>,
    headline3: <>Diplom Religionspädagogin (FH)</>,
    paragraph1: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Als Sprecherzieherin gebe ich Menschen Hilfen mit auf dem Weg, wie sie ihre verbale und nonverbale Kommunikation optimieren können. Mein besonderes Augenmerk liegt hierbei auf dem sprechtherapeutischen Bereich und der Stimmbildung.
      </Typography>
    ),
    paragraph2: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Im privaten und beruflichen Bereich werden wir immer wieder mit den Schwierigkeiten der zwischenmenschlichen Kommunikation konfrontiert. Ich helfe Menschen, Bedingungen einer guten Kommunikation zu erkennen und anzuwenden. Dadurch wird ein gutes Zusammenleben in Beruf und Familie gefördert und manipulativen Kommunikationsstrategien entgegengewirkt.
      </Typography>
    ),
    paragraph3: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Meine pädagogische Ausbildung ermöglicht es mir, sehr individuell auf die Bedürfnisse und Wünsche anderer Menschen einzugehen. Mein Ansatz ist es, dass meine Kunden ihr persönliches Glück finden. Mit dem Thema Glück und der Glücksforschung habe ich mich nicht nur jahrelang beschäftigt, sondern dieses auch unterrichtet.
      </Typography>
    ),
  });

  return (
    <>
      <Head title="Über mich" />
      <Nav />
      <Header
        title="Über mich"
        image="/meadow.jpg"
        position="50% 50%"
      />
      {firstPart}
      {secondPart}
      <Footer />
    </>
  );
}
