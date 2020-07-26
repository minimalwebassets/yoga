import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <title>
      {`${title} | Yoga Drishti`}
    </title>
  </NextHead>
);
Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
