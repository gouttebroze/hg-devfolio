import * as React from 'react';
import { Outlet, Link } from "react-router";
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Contact } from '../pages/Contact';
//import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
//import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/* <Sitemark /> */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <nav>
                <ul className='navbar__wrapper'>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                      <Link to="/formation">Formation</Link>
                  </li>
                  <li>
                      <Link to="/skills">Soft, hard & Mad Skills</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                      <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </nav>         
              <div>
                <ul>
                  <h3>Bienvenue à toutes & à tous les passionnés...mes passions, moteurs d'innovation et de créativité, m'ont depuis toujours guidé.</h3>
                  <h3>source de détermination, de challenge et d'accomplissement.</h3>
                  <li>création</li>
                  <li></li>
                  <li>collaboration essentielle (travail d'équipe, partage des connaissances)</li>
                  
                  <li>partage des responsabilités, des connaissances.... entre équipes de conception, design, programmation & développement, testing, déploiement....</li>
                  <li>amélioration continue, feedback et itérations, revues de code, pair programming...</li>
                  <li>quelques notions qui améliorent la qualité du code, la sécurité & la qualité de la livraison</li>
                  <li>améliorent également l'apprentissage, les conditions de travail, l'impliquation...</li>
                  <li>après avoir pratiqué le DevOps durant 2 ans chez Lydra, en tant que développeur React...</li>
                  <li>J'accorde aujourd'hui la plus grande importance autour de la culture DevOps...</li>

                  <li>besoin de créer, de collaborer & de partager mes passions</li>
                  <li>pratique de la musique (clarinette, batterie, basse...)</li>
                  <li>pratique du développement d'appli, des interfaces front, algoritymie, paradigme de programmation ou encore des collaborations sur différents projets open source ... </li>

                </ul>
               </div>
              <Outlet />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {/* <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {/* <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem> */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}