import React from 'react';
import './Error.scss';
import { Container, Typography, Button } from '@material-ui/core';
import { Face as FaceIcon, ErrorOutline as ErrorOutlineIcon} from '@material-ui/icons';

const Error: React.FC = () => (
  <div className="Error" data-testid="Error">
    <Container>
      <p className="sorry">
        S<FaceIcon /><ErrorOutlineIcon className="error-icon"/>RRY.
      </p>
      <Typography variant="body2" className="message">Something went wrong.</Typography>
    </Container>
    <Button variant="outlined" href="/" className="back-btn">Go Back</Button>
  </div>
);

export default Error;
