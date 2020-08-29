/* eslint-disable react/prop-types */

import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
} from '@material-ui/core';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import ButtonContact from '../src/ButtonContact';
import Mindfulness from '../svg/undraw_mindfulness.svg';
import Yoga from '../svg/undraw_yoga.svg';
import Header from '../src/Header';
import Head from '../src/Head';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    height: 730,
    margin: theme.spacing(4),
  },
  cardIllustration: {
    height: 200,
    width: 'auto',
  },
  questions: {
    '& *': {
      fontWeight: 'bold',
    },
  },
  cardButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function CoachingBeratung() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Card = ({
    icon,
    headline,
    paragraph,
  }) => (
    <Paper className={styles.card}>
      <Box
        display="flex"
        flexDirection="column"
        height={1}
        pt={4}
      >
        <Box my={4}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="h3"
            color="primary"
            align="center"
          >
            {headline}
          </Typography>
        </Box>
        <Box mx={4}>
          {paragraph}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
          mb={4}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            mt={2}
            mb={4}
          >
            <ButtonContact queryString={`?subject=${headline}`} />
          </Box>
          {icon}
        </Box>
      </Box>
    </Paper>
  );

  const beginnerTraining = (
    <Card
      icon={<Yoga className={styles.cardIllustration} />}
      headline="Beginner Training"
      paragraph={(
        <>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="left"
          >
            {/* eslint-disable-next-line max-len */}
            Get a kick-start on your yoga journey with this beginner course. Our trainer will meet you and your friends or colleagues in a location of your preference, maybe at the office or a local park. Here&apos;s what you will accomplish:
          </Typography>
          <Box className={styles.questions} my={2}>
            <Typography
              variant={isMobile ? 'body2' : 'body1'}
              component="ul"
            >
              <li>
                Core strength, balance, and flexibility
              </li>
              <li>
                Reduced stress levels and boosted energy
              </li>
              <li>
                Awareness of your inner self
              </li>
            </Typography>
          </Box>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="left"
          >
            {/* eslint-disable-next-line max-len */}
            Our pricing varies based on schedules, locations and group sizes. Please send us a line and we&apos;ll get you started as soon as possible.
          </Typography>
        </>
      )}
    />
  );

  const mindfulness = (
    <Card
      icon={<Mindfulness className={styles.cardIllustration} />}
      headline="Mindfulness"
      paragraph={(
        <>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="left"
          >
            {/* eslint-disable-next-line max-len */}
            Take a deep dive into the yogic medidation and mindfulness practices. Discover your inner peace and assume full control over your mind and soul. You will accomplish the following:
          </Typography>
          <Box className={styles.questions} my={2}>
            <Typography
              variant={isMobile ? 'body2' : 'body1'}
              component="ul"
            >
              <li>
                A high level of mindfulness and self-awareness
              </li>
              <li>
                Increased confidence and inner peace
              </li>
              <li>
                Deep relaxation and bliss
              </li>
            </Typography>
          </Box>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            align="left"
          >
            {/* eslint-disable-next-line max-len */}
            Gather a group of friends or colleagues and inform us about your preferences. We&apos;ll take care of the rest.
          </Typography>
        </>
      )}
    />
  );

  return (
    <>
      <Head title="Yoga Training" />
      <Nav />
      <Header
        title="Yoga Training"
        image="/barley-field.jpg"
        position="50% 65%"
      />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="center"
      >
        {beginnerTraining}
        {mindfulness}
      </Box>
      <Footer />
    </>
  );
}
