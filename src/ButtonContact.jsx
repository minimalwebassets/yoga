import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';

const ButtonContact = ({ color, queryString = '' }) => (
  <Link href={`/kontakt${queryString}`} passHref>
    <Button
      component="a"
      variant="contained"
      color={color}
      startIcon={<MailOutline />}
    >
      Kontakt
    </Button>
  </Link>
);
ButtonContact.propTypes = {
  color: PropTypes.string,
};
ButtonContact.defaultProps = {
  color: 'secondary',
};

export default ButtonContact;
