import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  Fab,
  makeStyles,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useRouter } from 'next/router';
import Axios from 'axios';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import Header from '../src/Header';
import Head from '../src/Head';

const useStyles = makeStyles((theme) => ({
  sendIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Contact() {
  const styles = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactForm = (
    <Formik
      enableReinitialize
      initialValues={{
        subject: router.query.subject || '',
        email: '',
        groupSize: '',
        schedule: '',
        location: '',
        message: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { data } = await Axios.post('/.netlify/functions/contact', values);
          setSubmitting(false);
          setIsError(false);
          if (data.accepted.length > 0) {
            router.push('/thanks');
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          setIsError(true);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {
            [
              {
                name: 'subject',
                type: 'text',
                label: 'Subject',
                required: true,
              },
              {
                name: 'email',
                type: 'email',
                required: true,
                label: 'Your e-mail',
              },
              {
                name: 'groupSize',
                type: 'text',
                label: 'How many people? (at least 5)',
                required: true,
              },
              {
                name: 'schedule',
                type: 'text',
                label: 'Your weekly training schedule',
                multiline: true,
                rows: 2,
              },
              {
                name: 'location',
                type: 'text',
                label: 'Where would you like to train?',
              },
              {
                name: 'message',
                type: 'text',
                label: 'Additional information',
                multiline: true,
                rows: 10,
              },
            ].map(({
              type,
              name,
              required,
              label,
              multiline,
              rows,
              placeholder,
            }) => (
              <Field
                key={name}
                type={type}
                name={name}
                label={label}
                required={required}
                multiline={multiline}
                rows={rows}
                placeholder={placeholder}
                variant="outlined"
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                component={TextField}
              />
            ))
          }
          <Box
            align="right"
            pt={1}
          >
            <Fab
              color="secondary"
              variant="extended"
              type="submit"
              disabled={isSubmitting}
            >
              Send
              <Send className={styles.sendIcon} />
            </Fab>
          </Box>
          { isError && (
            <Box
              height={theme.spacing(1)}
              align="right"
              color="error.main"
            >
              Something went wrong. Please refresh the page and try again.
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );

  return (
    <>
      <Head title="Contact Us" />
      <Nav />
      <Header
        title="Contact Us"
        image="/mushroom.jpg"
        position="50% 40%"
      />
      <Box
        py={isMobile ? 4 : 8}
      >
        <Container maxWidth={isMobile ? 'xs' : 'md'}>
          <Card>
            <Box p={isMobile ? 4 : 6}>
              <Typography>
                {/* eslint-disable-next-line max-len */}
                Ready to start your yoga journey? Please provide us with your contact details as well as some basic information about your group and we&apos;ll get you set up.
              </Typography>
              <Box pt={2} px={isMobile ? 0 : 4}>
                {contactForm}
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
