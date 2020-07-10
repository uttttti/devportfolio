import React from 'react';
import { Typography } from '@material-ui/core';
import './Title.scss';

type TitleProps = {
  text: string;
}

const Title: React.FC<TitleProps> = ({text}) => (
  <div className="Title" data-testid="Title">
    <Typography
      variant="h4"
      component="h2"
      align="center"
      paragraph
    >
      {text}
    </Typography>
  </div>
);

export default Title;
