import React from 'react';
import './Footer.scss';
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Footer: React.FC = () => {
  const ScrollTop = () => {

    const handleClick = () => {
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
    };

    return (
      <Fab color="primary" size="small" aria-label="scroll back to top" onClick={handleClick}>
        <KeyboardArrowUpIcon />
      </Fab>
    );
  }
  
  return (
    <div className="Footer" data-testid="Footer">
      <ScrollTop></ScrollTop>
      <footer>&copy;Miyoko Hirao</footer>
    </div>
  );
}

export default Footer;
