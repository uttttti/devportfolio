import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// drawerがStrictModeだとfindDOMNodeのエラーを吐くのでunstable_createMuiStrictModeThemeで回避
import { unstable_createMuiStrictModeTheme, ThemeProvider} from '@material-ui/core/styles';
import MenuButtons from '../MenuButtons/MenuButtons';

const Menu: React.FC = () => {
  const theme = unstable_createMuiStrictModeTheme();
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <ThemeProvider theme={theme}>
            <SwipeableDrawer
              anchor="right"
              open={isOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              disableBackdropTransition={!isIOS}
              disableDiscovery={isIOS}
            >
              <MenuButtons orientation="vertical"/>
            </SwipeableDrawer>
          </ThemeProvider>
        </>
      ) : (
        <div className="menus">
          <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
              <Toolbar>
                <MenuButtons orientation="horizontal"/>
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
