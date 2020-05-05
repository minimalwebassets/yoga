import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from '@material-ui/core';
import {
  MailOutline,
  Phone,
} from '@material-ui/icons';
import ButtonContact from './ButtonContact';
import Link from './Link';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // eslint-disable-next-line react/prop-types
  const contact = ({ icon, title, info }) => (
    <Box
      display="flex"
      pb={isMobile ? 1 : 2}
      px={isMobile ? 0 : 2}
      alignItems="center"
    >
      {icon}
      <Box pl={1}>
        <Typography
          variant={isMobile ? 'caption' : 'body2'}
        >
          {title}
        </Typography>
        <Typography variant={isMobile ? 'caption' : 'body2'}>
          {info}
        </Typography>
      </Box>
    </Box>
  );

  const email = contact({
    icon: <MailOutline color="secondary" />,
    title: <>Email: </>,
    info: <>kontakt[at]coaching-neubauer.de</>,
  });

  const phone = contact({
    icon: <Phone color="secondary" />,
    title: <>Telefon: </>,
    info: <>+49 178 11 24 543</>,
  });

  return (
    <Box
      bgcolor="primary.main"
      color="primary.contrastText"
      pt={isMobile ? 3 : 8}
      pb={isMobile ? 2 : 8}
    >
      <Container maxWidth={isMobile ? 'xs' : 'lg'}>
        <Box
          display={isMobile ? 'block' : 'flex'}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box
            width="300px"
            display={isMobile ? 'none' : ''}
          >
            {email}
            {phone}
          </Box>
          <Box>
            <Box pb={2} align="center">
              <Typography variant={isMobile ? 'body2' : 'body1'}>
                Bereit für Ihr individuelles Coaching?
              </Typography>
              <Typography variant={isMobile ? 'body2' : 'body1'}>
                Kontaktieren Sie mich hier:
              </Typography>
            </Box>
            <Box align="center">
              <ButtonContact />
            </Box>
          </Box>
          <Box
            width="xs"
            display={isMobile ? '' : 'none'}
            pt={2}
          >
            {email}
            {phone}
          </Box>
          <Box
            width={isMobile ? 'xs' : '300px'}
            align={isMobile ? '' : 'center'}
          >
            <Link
              href="/impressum"
              color="inherit"
              variant={isMobile ? 'caption' : 'body2'}
            >
              Impressum
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
