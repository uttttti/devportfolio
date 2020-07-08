import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

// drawerがStrictModeだとfindDOMNodeのエラーを吐くのでunstable_createMuiStrictModeThemeで回避
import { unstable_createMuiStrictModeTheme, ThemeProvider} from '@material-ui/core/styles';
import MenuButtons from '../MenuButtons/MenuButtons';

import IconButton from '@material-ui/core/IconButton';
import './Menu.scss';
const Menu: React.FC = () => {
  const theme = unstable_createMuiStrictModeTheme({
    palette: {
      primary: {
        main: '#BA68C8',
        contrastText: '#F3E5F5'
      },
      secondary: {
        main: '#EEE',
        contrastText: '#BA68C8'
      },
      text: {
        primary: '#453B47'
      }
    }
  });
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  const isIOS = typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const trigger = useScrollTrigger();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open)
  }

  return (
    <div className="Menu" data-testid="Menu">
      { isXS ? (
        <>
          <Fab
            size="small"
            color="secondary"
            aria-label="open drawer"
            className="fab-button"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </Fab>
          <ThemeProvider theme={theme}>
            <SwipeableDrawer
              anchor="right"
              open={isOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              disableBackdropTransition={!isIOS}
              disableDiscovery={isIOS}
            >
              <IconButton onClick={toggleDrawer(false)} className="close-button">
                <CloseIcon color="primary" />
              </IconButton>
              <MenuButtons orientation="vertical" />
            </SwipeableDrawer>
          </ThemeProvider>
        </>
      ) : (
        <div className="menus">
          <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
              <Toolbar>
                <MenuButtons orientation="horizonal"/>
              </Toolbar>
            </AppBar>
          </Slide>
          <Toolbar />
        </div>
      )}
    </div>
  )
};

export default Menu;
