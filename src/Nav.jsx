import React, { Fragment } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';
import Link from 'next/link';
import NavDrawer from './NavDrawer';
import ButtonContact from './ButtonContact';

const navHeight = 16;
const navHeightMobile = 13;

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: theme.spacing(2, 2),
    height: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 1),
      height: theme.spacing(6),
    },
  },
  nav: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.appBar,
    height: theme.spacing(navHeight),
    clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 85%)',
    '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 60%, 0 85%)',
    marginBottom: -theme.spacing(navHeight) * 0.4,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(navHeightMobile),
      marginBottom: -theme.spacing(navHeightMobile) * 0.4,
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  slant: {
    position: 'absolute',
    zIndex: theme.zIndex.appBar - 1,
    backgroundColor: theme.palette.tertiary.main,
    width: '100%',
    top: 0,
    height: theme.spacing(navHeight),
    clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
    '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(navHeightMobile),
    },
  },
}));

const Nav = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const routes = [
    { label: 'Coaching & Beratung', path: '/coaching-beratung' },
    { label: 'Organisatorisches', path: '/organisatorisches' },
    { label: 'Über mich', path: '/uber-mich' },
    {
      label: 'Kontakt',
      path: '/kontakt',
      component: <ButtonContact color="primary" />,
      icon: <MailOutline />,
    },
  ];
  const navButtons = routes.map(
    ({
      label,
      path,
      component,
    }) => (
      <Fragment key={path}>
        {component || (
          <Link
            href={path}
            passHref
          >
            <Button
              className={styles.button}
              component="a"
            >
              { label }
            </Button>
          </Link>
        )}
      </Fragment>
    ),
  );
  return (
    <>
      <AppBar className={styles.nav}>
        <Toolbar className={styles.toolbar}>
          <Link href="/" key="/">
            <a>
              <img
                className={styles.logo}
                src="/logo.png"
                alt="Coaching Neubauer Logo"
              />
            </a>
          </Link>
          <div style={{ flexGrow: 1 }} />
          {isMobile ? <NavDrawer routes={routes} /> : navButtons}
        </Toolbar>
      </AppBar>
      <div className={styles.slant} />
    </>
  );
};

export default Nav;
