import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import cloudinary from './cloudinary';

const useStyles = makeStyles({
  header: (props) => ({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${
      cloudinary.url(`yoga/${props.image}`, { fetchFormat: 'auto' })
    })`,
    backgroundSize: 'cover',
    backgroundPosition: props.position,
  }),
  title: {
    '& *': {
      fontFamily: 'Times New Roman',
      fontVariant: 'small-caps',
      letterSpacing: '0.08em',
    },
  },
});

const Header = ({
  title,
  image,
  position,
  titleVariantMobile,
}) => {
  const styles = useStyles({ image, position });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      className={styles.header}
      width="100%"
      height={isMobile ? 200 : 300}
      display="flex"
      alignItems="center"
      justifyContent={isMobile ? 'center' : 'left'}
    >
      <Box
        className={styles.title}
        boxShadow={1}
        bgcolor="primary.main"
        py={isMobile ? 2 : 3}
        px={4}
        borderRadius={theme.spacing(1)}
        color="primary.contrastText"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="90%"
        mt={isMobile ? 2 : 4}
        ml={isMobile ? 0 : 10}
      >
        <Typography
          variant={isMobile ? titleVariantMobile : 'h4'}
          component="h1"
          align="center"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string,
  titleVariantMobile: PropTypes.string,
};
Header.defaultProps = {
  position: 'center',
  titleVariantMobile: 'h5',
};

export default Header;
