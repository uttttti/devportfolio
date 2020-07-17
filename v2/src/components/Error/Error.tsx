import React from 'react';
import './Error.scss';
import { Container, Typography, Button } from '@material-ui/core';
import { Face as FaceIcon, ErrorOutline as ErrorOutlineIcon} from '@material-ui/icons';

const Error: React.FC = () => (
  <div className="Error" data-testid="Error">
    <div className="background">
      <span className="bg1"></span>
      <span className="bg2"></span>
      <span className="bg3"></span>
    </div>
    <Container className="contents">
      <p className="sorry">
        S<FaceIcon /><ErrorOutlineIcon className="error-icon"/>RRY.
      </p>
      <Typography variant="body2" className="message">Something went wrong.</Typography>
    </Container>
    <Button variant="outlined" color="secondary" href="/" className="back-btn">Go Back</Button>
  </div>
);

export default Error;
