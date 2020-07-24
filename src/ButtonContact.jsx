import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';

const ButtonContact = ({ color, queryString }) => (
  <Link href={`/get-in-touch${queryString}`} passHref>
    <Button
      component="a"
      variant="contained"
      color={color}
      startIcon={<MailOutline />}
    >
      Get in Touch
    </Button>
  </Link>
);
ButtonContact.propTypes = {
  color: PropTypes.string,
  queryString: PropTypes.string,
};
ButtonContact.defaultProps = {
  color: 'secondary',
  queryString: '',
};

export default ButtonContact;
