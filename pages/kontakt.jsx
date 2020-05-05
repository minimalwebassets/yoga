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

function Kontakt() {
  const styles = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactForm = (
    <Formik
      enableReinitialize
      initialValues={{
        email: '',
        subject: router.query.betreff || '',
        message: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { data } = await Axios.post('/.netlify/functions/contact', values);
          setSubmitting(false);
          setIsError(false);
          if (data.accepted.length > 0) {
            router.push('/danke');
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
                name: 'email',
                type: 'email',
                required: true,
                label: 'E-Mail',
              },
              {
                name: 'subject',
                type: 'text',
                label: 'Betreff',
              },
              {
                name: 'message',
                type: 'text',
                required: true,
                label: 'Nachricht',
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
                size="small"
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
              Senden
              <Send className={styles.sendIcon} />
            </Fab>
          </Box>
          { isError && (
            <Box
              height={theme.spacing(1)}
              align="right"
              color="error.main"
            >
              Etwas ist schief gelaufen. Bitte versuche es erneut.
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );

  return (
    <>
      <Head title="Kontakt" />
      <Nav />
      <Header
        title="Kontakt"
        image="/mushroom.jpg"
        position="50% 40%"
      />
      <Box
        py={isMobile ? 4 : 8}
      >
        <Container maxWidth={isMobile ? 'xs' : 'md'}>
          <Card>
            <Box p={6}>
              <Typography>
                {/* eslint-disable-next-line max-len */}
                Bei Fragen zu den Einzel- oder Gruppencoachings füllen Sie bitte das Kontakfomular aus oder Sie kontaktieren mich telefonisch oder per Mail. Sie werden zeitnah eine Antwort erhalten, je nach Wunsch schriftlich oder telefonisch.
              </Typography>
              <Box pt={2} px={4}>
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

export default Kontakt;
