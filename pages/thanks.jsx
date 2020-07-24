/* eslint-disable react/prop-types */
import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Button,
} from '@material-ui/core';
import Link from 'next/link';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import MessageSent from '../svg/undraw_message_sent.svg';
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

  return (
    <>
      <Head title="Thanks!" />
      <Nav />
      <Header
        title="Contact Us"
        image="mushroom.jpg"
        position="50% 40%"
      />
      <Box
        bgcolor="background.paper"
        pt={isMobile ? 4 : 8}
      >
        <Container maxWidth={isMobile ? 'xs' : 'sm'}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="h3"
            color="primary"
            align="center"
          >
            Thanks for getting in touch!
          </Typography>
          <Box py={isMobile ? 2 : 4}>
            <Typography
              variant={isMobile ? 'body2' : 'body1'}
              align="center"
            >
              {/* eslint-disable-next-line max-len */}
              We&apos;ll start working on your inquiry as soon as we get it and you&apos;ll hear back from us in no time! Nice work so far—we can take it from here.
            </Typography>
            <Box py={4}>
              <Typography
                variant={isMobile ? 'body2' : 'body1'}
                align="center"
              >
                Best regards,
              </Typography>
              <Typography
                variant={isMobile ? 'body2' : 'body1'}
                align="center"
              >
                The Yoga Drishta Family
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
          >
            <MessageSent className={styles.cardIllustration} />
          </Box>
          <Box
            align="center"
            py={isMobile ? 4 : 8}
          >
            <Link href="/" passHref>
              <Button
                component="a"
                variant="contained"
                color="secondary"
              >
                Back to the Home Page
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
