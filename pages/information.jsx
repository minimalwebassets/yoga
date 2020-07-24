import React from 'react';
import PropTypes from 'prop-types';
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
import Header from '../src/Header';
import Head from '../src/Head';

export default function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Section = ({
    picture,
    headline,
    paragraph,
    isFlipped,
  }) => {
    const picturePadding = isMobile ? 0 : 6;
    const pictureBox = (
      <Box
        pl={isFlipped ? 0 : picturePadding}
        pr={isFlipped ? picturePadding : 0}
        mt={isMobile ? 4 : 0}
      >
        {picture}
      </Box>
    );
    return (
      <Container maxWidth={isMobile ? 'xs' : 'lg'}>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : `row${isFlipped && '-reverse'}`}
          py={isMobile ? 6 : 12}
          alignItems="center"
          mx={2}
        >
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
          {pictureBox}
        </Box>
      </Container>
    );
  };
  Section.propTypes = {
    picture: PropTypes.element.isRequired,
    headline: PropTypes.string.isRequired,
    paragraph: PropTypes.element.isRequired,
    isFlipped: PropTypes.bool,
  };
  Section.defaultProps = {
    isFlipped: false,
  };

  const planning = (
    <Section
      picture={<img src="/old-phone.png" alt="Old Phone" />}
      headline="Planning"
      paragraph={(
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
          component="div"
        >
          <Typography gutterBottom>
            {/* eslint-disable-next-line max-len */}
            As soon as we receive your inquiry, we&apos;ll begin planning working on a schedule according to the needs and preferences of your group.
          </Typography>
          <Typography>
            {/* eslint-disable-next-line max-len */}
            You&apos;ll receive a fully-fledged plan along with your price within one or two working days.
          </Typography>
        </Typography>
      )}
    />
  );
  const schedule = (
    <Section
      isFlipped
      picture={<img src="/clock.png" alt="Clock" />}
      headline="Schedule"
      paragraph={(
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
          component="div"
        >
          <Typography gutterBottom>
            {/* eslint-disable-next-line max-len */}
            Our yoga training typically takes place over twelve sessions, one hour each. For beginners, we suggest one or two sessions a week, leaving plenty of time for your other physical activities.
          </Typography>
          <Typography>
            {/* eslint-disable-next-line max-len */}
            If you feel motivated to do more, we urge you to keep doing your new exercises at home. Since yoga exercises can be as easy or difficult as you make them, you may feel free to practice them even on your rest days.
          </Typography>
        </Typography>
      )}
    />
  );
  const pricing = (
    <Section
      picture={<img src="/fountain-pen.png" alt="Fountain Pen" />}
      headline="Pricing"
      paragraph={(
        <>
          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            component="div"
            align="left"
          >
            <Typography gutterBottom>
              {/* eslint-disable-next-line max-len */}
              As soon as we receive your inquiry, we will start working to find the right plan for you. Within a few working days, we&apos;ll send a complete schedule and price for you to review.
            </Typography>
            <Typography>
              {/* eslint-disable-next-line max-len */}
              Prices may vary based on a number of factors but typically range between $5 and $15 per session per participant.
            </Typography>
          </Typography>
        </>
      )}
    />
  );

  return (
    <>
      <Head title="Information" />
      <Nav />
      <Header
        title="Information"
        image="/avenue.jpg"
        position="50% 40%"
      />
      {planning}
      <Divider />
      {schedule}
      <Divider />
      {pricing}
      <Footer />
    </>
  );
}
