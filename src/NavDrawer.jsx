import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Link from 'next/link';

const useStyles = makeStyles({
  list: {
    minWidth: 250,
  },
});

const NavDrawer = ({ routes }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (bool) => () => { setIsOpen(bool); };
  const styles = useStyles();
  const list = (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map(({ label, path, icon }) => (
          <Fragment key={path}>
            { icon && <Divider /> }
            <Link
              href={path}
              passHref
            >
              <ListItem
                button
                component="a"
              >
                { icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          </Fragment>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <IconButton
        aria-controls="nav-menu"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        anchor="right"
      >
        {list}
      </Drawer>
    </div>
  );
};

NavDrawer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavDrawer;
