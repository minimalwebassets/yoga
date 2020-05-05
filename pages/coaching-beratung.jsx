/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link';
import {
  makeStyles,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import ButtonContact from '../src/ButtonContact';
import Einzelcoaching from '../svg/einzelcoaching.svg';
import Gruppencoaching from '../svg/gruppencoaching.svg';
import Header from '../src/Header';
import Head from '../src/Head';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
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

  const card = ({
    link,
    icon,
    headline,
    paragraph,
  }) => (
    <Card className={styles.card}>
      <CardContent>
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
        <CardActions>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            my={1}
          >
            <Link href={link} passHref>
              <Button
                className={styles.cardButton}
                component="a"
                size="small"
                color="secondary"
              >
                Details
              </Button>
            </Link>
            <ButtonContact queryString={`?betreff=${headline}`} />
          </Box>
        </CardActions>
      </CardContent>
      <Box
        display="flex"
        justifyContent="center"
        mb={4}
      >
        {icon}
      </Box>
    </Card>
  );

  const einzelcoaching = card({
    link: '/einzelcoaching',
    icon: <Einzelcoaching className={styles.cardIllustration} />,
    headline: 'Einzelcoaching',
    paragraph: (
      <>
        {/* eslint-disable-next-line max-len */}
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          Jeder von uns hat sich schon mindestens eine der folgenden Fragen gestellt:
        </Typography>
        <Box className={styles.questions} my={2}>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            component="ul"
          >
            <li>
              Wie kann ich mich gut präsentieren?
            </li>
            <li>
              Wie bewältige ich Stress in der Arbeit oder privat?
            </li>
            <li>
              Wie meistere ich Krisen in meinem Leben?
            </li>
          </Typography>
        </Box>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Für diese Fragen finden wir gemeinsam Antworten. Im Einzelcoaching entwickeln wir hierfür individuelle Strategien.
        </Typography>
      </>
    ),
  });

  const gruppencoaching = card({
    link: '/coaching-in-kleingruppen',
    icon: <Gruppencoaching className={styles.cardIllustration} />,
    headline: 'Coaching in Kleingruppen',
    paragraph: (
      <>
        {/* eslint-disable-next-line max-len */}
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Im Zusammenleben mit unseren Mitmenschen werden wir häufig mit folgenden Themen konfroniert:
        </Typography>
        <Box className={styles.questions} my={2}>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            component="ul"
          >
            <li>
              Wie kommuniziere ich mit anderen in einer guten Art und Weise?
            </li>
            <li>
              Wie gehen wir in der Familie oder im Team mit Konflikten um?
            </li>
          </Typography>
        </Box>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          Wir erarbeiten gemeinsam Richtlinien für einen guten und entspannten Umgang in der Gruppe.
        </Typography>
      </>
    ),
  });

  return (
    <>
      <Head title="Coaching & Beratung" />
      <Nav />
      <Header
        title="Coaching & Beratung"
        image="/barley-field.jpg"
        position="50% 65%"
      />
      <Box
        display={isMobile ? 'block' : 'flex'}
        justifyContent="center"
      >
        {einzelcoaching}
        {gruppencoaching}
      </Box>
      <Footer />
    </>
  );
}
