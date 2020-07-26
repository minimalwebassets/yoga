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

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // eslint-disable-next-line react/prop-types
  const contact = ({ icon, title, info }) => (
    <Box
      display="flex"
      pb={isMobile ? 1 : 2}
      // px={isMobile ? 0 : 2}
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
    info: <>yogadrishti[at]example.com</>,
  });

  const phone = contact({
    icon: <Phone color="secondary" />,
    title: <>Phone: </>,
    info: <>+55 555 5555</>,
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
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isMobile ? 'column' : 'row'}
        >
          {
            !isMobile && (
              <Box flexBasis="33%">
                {email}
              </Box>
            )
          }
          <Box
            flexBasis="33%"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box pb={2}>
              <Typography variant={isMobile ? 'body2' : 'body1'}>
                Ready to start your yoga journey?
              </Typography>
            </Box>
            <Box>
              <ButtonContact />
            </Box>
          </Box>
          <Box
            flexBasis="33%"
            display="flex"
            justifyContent={isMobile ? 'center' : 'flex-end'}
            flexDirection={isMobile ? 'column' : 'row'}
            pt={isMobile ? 2 : 0}
          >
            {isMobile && email}
            {phone}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
