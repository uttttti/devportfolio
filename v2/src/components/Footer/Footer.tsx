import React from 'react';
import './Footer.scss';
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Footer: React.FC = () => (
  <div className="Footer" data-testid="Footer">
    <Fab color="primary" size="small" aria-label="scroll back to top" href="#back-to-top-anchor">
      <KeyboardArrowUpIcon />
    </Fab>
    <footer>&copy;Miyoko Hirao</footer>
  </div>
);

export default Footer;
