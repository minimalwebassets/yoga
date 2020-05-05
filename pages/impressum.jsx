import React from 'react';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Nav from '../src/Nav';
import Footer from '../src/Footer';
import Header from '../src/Header';
import Head from '../src/Head';

export default function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // eslint-disable-next-line react/prop-types
  const section = ({
    title,
    headline1,
    headline2,
    headline3,
    headline4,
    headline5,
    headline6,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
  }) => (
    <Container maxWidth={isMobile ? 'xs' : 'md'}>
      <Box
        pt={isMobile ? 4 : 8}
        pb={isMobile ? 4 : 8}
      >
        <Box pb={isMobile ? 2 : 4}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h2"
            color="primary"
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline1}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph1}
        </Box>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline2}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph2}
        </Box>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline3}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph3}
        </Box>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline4}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph4}
        </Box>
         <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline5}
        </Typography>
        <Box
          pt={isMobile ? 1 : 2}
          pb={isMobile ? 2 : 4}
        >
          {paragraph5}
        </Box>
         <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          color="primary"
        >
          {headline6}
        </Typography>
        <Box pt={isMobile ? 1 : 2}>
          {paragraph6}
        </Box>
      </Box>
    </Container>
  );

  const impressum = section({
    title: <>Impressum (Angaben gemäß § 5 TMG):</>,
    headline1: <>Betreiber der Webseite</>,
    headline2: <>Urheberrecht</>,
    headline3: <>Datenschutzerklärung</>,
    headline4: <>Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</>,
    headline5: <>Rechte des Nutzers</>,
    headline6: <>Löschung von Daten</>,
    paragraph1: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Angelika Neubauer
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Coach
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Königsberger Str. 4
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          90610 Winkelhaid
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Telefon +49 178 11 24 543
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          kontakt[at]coaching-neubauer.de
        </Typography>
      </>
    ),
    paragraph2: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          Geltungsraum der Versicherung: weltweit
        </Typography>
      </>
    ),
    paragraph3: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch die Websitebetreiberin Angelika Neubauer informieren.
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Verantwortliche für den Datenschutz
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Angelika Neubauer
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Königsberger Str. 4
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          90610 Winkelhaid
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Deutschland
        </Typography>
      </>
    ),
    paragraph4: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Ich verarbeite personenbezogene Daten wie Vorname, Nachname, E-Mail-Adresse, Wohnort, Postleitzahl, Telefonnummer und Inhaltsangaben aus dem Kontaktformular.
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Nehmen Sie mit mir als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.
        </Typography>
      </>
    ),
    paragraph5: (
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        align="left"
      >
        {/* eslint-disable-next-line max-len */}
        Sie haben als Nutzer das Recht, auf Antrag eine kostenlose Auskunft darüber zu erhalten, welche personenbezogenen Daten über Sie gespeichert wurden. Sie haben außerdem das Recht auf Berichtigung falscher Daten und auf die Verarbeitungseinschränkung oder Löschung Ihrer personenbezogenen Daten.
      </Typography>
    ),
    paragraph6: (
      <>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Sie haben das Recht auf Löschung Ihrer Daten. Von mir gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung nicht mehr vonnöten sein und es keine gesetzlichen Aufbewahrungsfristen geben, gelöscht.
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          align="left"
        >
          {/* eslint-disable-next-line max-len */}
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
        </Typography>
      </>
    ),
  });

  return (
    <>
      <Head title="Impressum" />
      <Nav />
      <Header
        title="Impressum"
        image="mt-fuji_tt2b0f.jpg"
        position="50% 75%"
      />
      {impressum}
      <Footer />
    </>
  );
}
