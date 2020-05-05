import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Head from '../src/Head';
import Nav from '../src/Nav';
import Footer from '../src/Footer';

const slantHeight = 16;
const slantHeightMobile = 13;

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundSize: 'cover',
    background: `no-repeat url(/forest.jpg)`,
    backgroundAttachment: 'fixed',
    backgroundPositionY: '80%',
  },
  title: {
    '& *': {
      fontFamily: 'Times New Roman',
      fontVariant: 'small-caps',
      letterSpacing: '0.08em',
    },
    '& h1::after': {
      content: '""',
      display: 'block',
      width: '90%',
      margin: 'auto',
      paddingTop: theme.spacing(1),
      borderBottom: '1px solid white',
    },
  },
  endSlant: {
    position: 'relative',
    width: '100%',
    bottom: theme.spacing(slantHeight),
    height: theme.spacing(slantHeight),
    marginBottom: -theme.spacing(slantHeight),
    [theme.breakpoints.down('sm')]: {
      bottom: theme.spacing(slantHeightMobile),
      height: theme.spacing(slantHeightMobile),
      marginBottom: -theme.spacing(slantHeightMobile),
    },
  },
  endSlantHighlight: {
    position: 'absolute',
    backgroundColor: theme.palette.tertiary.main,
    width: '100%',
    height: '100%',
    clipPath: 'polygon(100% 60%, 0% 100%, 100% 100%)',
    '-webkit-clip-path': 'polygon(100% 60%, 0% 100%, 100% 100%)',
  },
  endSlantPaper: {
    position: 'absolute',
    bottom: -0.1,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
    paddingBottom: theme.spacing(1),
    clipPath: 'polygon(100% 75%, 0% 100%, 100% 100%)',
    '-webkit-clip-path': 'polygon(100% 75%, 0% 100%, 100% 100%)',
  },
  imageHeadline: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  railway: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/railway.jpg)`,
    backgroundPosition: '50% 25%',
  },
  dawn: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/dawn.jpg)`,
    backgroundPosition: '50% 25%',
  },
  bulletList: {
    '& li': {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function Index() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const header = (
    <>
      <Box
        height={isMobile ? 300 : 500}
        className={styles.header}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          className={styles.title}
          bgcolor="primary.main"
          color="primary.contrastText"
          py={isMobile ? 2 : 4}
          px={isMobile ? 5 : 6}
          borderRadius={theme.spacing(1)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="90%"
          boxShadow={1}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h1"
            align="center"
          >
            Coaching Neubauer
          </Typography>
          <Box mt={isMobile ? 1 : 2}>
            <Typography
              variant={isMobile ? 'caption' : 'h5'}
              component="h2"
            >
              Coaching — Training — Beratung
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className={styles.endSlant}>
        <div className={styles.endSlantHighlight} />
        <div className={styles.endSlantPaper} />
      </div>
    </>
  );
  // eslint-disable-next-line react/prop-types
  const section = ({ headline, paragraph }) => (
    <Box
      bgcolor="background.paper"
      align="center"
      boxShadow={1}
      py={isMobile ? 8 : 16}
    >
      <Container maxWidth={isMobile ? 'xs' : 'md'}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          component="h3"
          color="primary"
        >
          {headline}
        </Typography>
        <Box pt={isMobile ? 4 : 8}>
          {paragraph}
        </Box>
      </Container>
    </Box>
  );
  const sectionOne = section({
    headline: <>Wie entwickle ich mich beruflich weiter?</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Jeder Mensch hat besondere Stärken, welche - bewusst oder unbewusst - unsere Berufswahl beeinflussen. Ich begleite Sie auf der Suche nach den eigenen Stärken und gebe Ihnen Strategien an die Hand, wie Sie diese sinnvoll nutzen und effektiv einsetzen können. Die Basis für die Umsetzung der eigenen Fähigkeiten und Ideen ist eine gelingende Kommunikation. Unstimmigkeiten und Missverständnisse entstehen oftmals aufgrund von Kommunikationsproblemen. Durch ein gezieltes Training arbeite ich mit Ihnen an der Optimierung von Gesprächsführung und Präsentation.
      </Typography>
    ),
  });
  const sectionTwo = section({
    headline: <>Was kann mir zu einem erfüllten Leben verhelfen?</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Unsere Lebensqualität hängt von verschiedenen Faktoren ab, Familie, Beruf, eigenes Befinden - körperlich und seelisch. Oftmals haben wir Lebensphasen zu meistern, in denen uns viele Steine in den Weg gelegt werden. Das kann sowohl die berufliche Karriere als auch den privaten Alltag betreffen. Ich unterstütze Sie dabei, ihre eigenen Wünsche zu erkennen und danach zu handeln, Probleme zu meistern und ein harmonischeres Lebensgefühl zu erlangen.
      </Typography>
    ),
  });
  const sectionThree = section({
    headline: <>Welchen Nutzen ziehe ich aus einem Coaching?</>,
    paragraph: (
      <Typography
        className={styles.bulletList}
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
        component="ul"
      >
        {
          [
            {
              title: 'Orientierung',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  Die Schnelllebigkeit und Vielfalt unserer Zeit führen verstärkt dazu, dass es uns schwerfällt, klare Entscheidungen zu treffen. Sie werden durch einen neutralen Ansprechpartner dabei unterstützt, Wichtiges von Unwichtigem zu trennen und einen sinnvollen Weg für die Zukunft zu suchen.
                </>
              ),
            },
            {
              title: 'Problemlösung',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  Viele berufliche oder private Situationen nehmen uns so gefangen, dass wir unter Dauerbelastung und Stress stehen. Durch eine professionelle Unterstützung können Ihnen andere Sichtweisen aufgezeigt und Strategien für den Umgang mit Schwierigkeiten gefunden werden.
                </>
              ),
            },
            {
              title: 'Kompetenzerweiterung',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  Durch ein konstruktives Feedback und eine fachkundige Beratung erweitern Sie Ihre Kompetenzen für den Beruf und im zwischenmenschlichen Bereich.
                </>
              ),
            },
            {
              title: 'Zeit',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  Sie nehmen sich Zeit für sich und nutzen diese nur für Ihre Person. Es ist jemand da, der Ihnen zuhört, Ihre Probleme, Wünsche und Ideen ernst nimmt und mit Ihnen gemeinsam passende Lösungen findet.
                </>
              ),
            },
          ].map(({ title, text }) => (
            <li key={title}>
              <strong>
                {`${title}: `}
              </strong>
              {text}
            </li>
          ))
        }
      </Typography>
    ),
  });
  const imageHeadline = (headline, bgStyle) => (
    <Box
      color="primary.contrastText"
      width="100%"
      height={isMobile ? 300 : 500}
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={`${styles.imageHeadline} ${bgStyle}`}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h2'}
        component="h2"
        align="center"
      >
        {headline}
      </Typography>
    </Box>
  );
  return (
    <>
      <Head title="Coaching – Training – Beratung" />
      <Nav />
      {header}
      {sectionOne}
      {imageHeadline(
        <>Stärken effektiv einsetzen</>,
        styles.railway,
      )}
      {sectionTwo}
      {imageHeadline(
        <>Leben sinvoll nutzen</>,
        styles.dawn,
      )}
      {sectionThree}
      <Footer />
    </>
  );
}
