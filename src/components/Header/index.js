// == Import : npm
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import {
  Toolbar,
  Container,
  Hidden,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  Switch,
} from '@mui/material';

// == Import : local
import ohisseLogo from 'src/assets/img/logo-complet-bicolor.png';
import userLogo from 'src/assets/img/user.png';
import './header.scss';
import AccountConnect from './AccountConnect';

// == Composant
function Header() {
  // Link's array
  const navLinks = [
    { name: 'Carte', href: '/map' },
    { name: 'Ajout de spot', href: '/ajout-spot' },
    { name: 'Salles intérieures', href: '/fiches-interieur' },
    { name: 'Spots extérieurs', href: '/fiches-exterieur' },
  ];

  const [open, setOpen] = useState(false);

  return (
    // Material UI components
    <AppBar position="sticky">
      <Toolbar className="header">
        <Container maxWidth="md" className="header">
          <div className="header-bar">
            <Link to="/">
              <img className="header-bar__logo" src={ohisseLogo} alt="ohisse logo" />
            </Link>
            {/* Desktop Nav */}
            <div className="header-bar__links">
              <Hidden mdDown>
                {navLinks.map((item) => (
                  <NavLink to={item.href} className="gutter-links">{item.name}</NavLink>
                ))}
                {/* Dark mode/Connect links */}
                <div className="burger__connect--dark-mode">
                  <WbSunnyIcon className="gutter-links" />
                  <Switch />
                  <Brightness2Icon />
                </div>
                {/* Menu component with connexion pop-up */}
                <AccountConnect />
              </Hidden>
            </div>
            {/* Button of hamburger menu */}
            <Hidden mdUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon className="header-bar__button" />
              </IconButton>
            </Hidden>
          </div>
        </Container>
      </Toolbar>
      {/* End of Desktop Nav */}

      {/* Mobile Nav */}
      <div className="burger">
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          {/* Close button of the burger nav */}
          <div className="burger__top-nav">
            <div className="burger__close-button">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            {/* Links of top nav burger */}
            <List>
              {navLinks.map((item) => (
                <ListItem className="burger__links">
                  <NavLink to={item.href} onClick={() => setOpen(false)}>{item.name}</NavLink>
                </ListItem>
              ))}
              <ListItem className="burger__links burger__account">
                <NavLink to="/profil" onClick={() => setOpen(false)}><img className="burger__account--image" src={userLogo} alt="user logo" />Mon Compte</NavLink>
              </ListItem>
            </List>
          </div>
          {/* Links of bottom burger nav */}
          <List>
            <ListItem className="burger__links burger__connect">
              <NavLink to="/connexion" onClick={() => setOpen(false)}><img className="burger__connect--image" src={userLogo} alt="user logo" />Connexion</NavLink>
              <div className="burger__connect--dark-mode">
                <WbSunnyIcon />
                <Switch />
                <Brightness2Icon />
              </div>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
      {/* End of Mobile Nav */}
    </AppBar>
  );
}

// == Export
export default Header;
