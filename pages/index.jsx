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
    color: 'rgba(255, 255, 255, 0.8)',
  },
  railway: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/railway.jpg)`,
    backgroundPosition: '50% 25%',
  },
  dawn: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/dawn.jpg)`,
    backgroundPosition: '50% 25%',
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
            Yoga Drishti
          </Typography>
          <Box mt={isMobile ? 1 : 2}>
            <Typography
              variant={isMobile ? 'caption' : 'h5'}
              component="h2"
            >
              Become one with your inner self
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
    headline: <>Become the best version of yourself</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        The yogic exercises and meditation are specially designed to make you more familiar with your own body and soul. By engaging in these practices, you will find yourself becoming aware of every feeling, every breath and every thought. You will unlock the ability to build your own character and your own life on a strong foundation.
      </Typography>
    ),
  });
  const sectionTwo = section({
    headline: <>Take a break from the world</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Practicing yoga and meditation will allow you to reach a deep level of physical and mental relaxation. Whether you feel overwhelmed, hyperactive, or exhausted, even a short exercise will help you refresh your mind and body, energizing you for whatever challenge lies ahead.
      </Typography>
    ),
  });
  const sectionThree = section({
    headline: <>What&apos;s in it for me?</>,
    paragraph: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
        component="ul"
      >
        {
          [
            {
              title: 'Stress Relief',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  Yoga practice is an excellent way to find your inner peace and to step away from the constant noise of daily life.
                </>
              ),
            },
            {
              title: 'Relaxation',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  The exercises will help relax your mind as well as your muscles through stretching and meditation.
                </>
              ),
            },
            {
              title: 'Strength',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  More advanced techniques use your own body as the ultimate exercise tool, activating all of your muscles to build immense strength.
                </>
              ),
            },
            {
              title: 'Flexibility',
              text: (
                <>
                  {/* eslint-disable-next-line max-len */}
                  By carefully progressing through various poses, you will become more dexterous than you can imagine!
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
      <Head title="Yoga Drishta – For Your Body and Soul" />
      <Nav />
      {header}
      {sectionOne}
      {imageHeadline(
        <>Enjoy the Journey</>,
        styles.railway,
      )}
      {sectionTwo}
      {imageHeadline(
        <>Find your Inner Spirit</>,
        styles.dawn,
      )}
      {sectionThree}
      <Footer />
    </>
  );
}
