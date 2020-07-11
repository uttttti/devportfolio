import React from 'react';
import { Typography } from '@material-ui/core';
import './Title.scss';

type TitleProps = {
  label: string;
}

const Title: React.FC<TitleProps> = ({label}) => (
  <div className="Title" data-testid="Title">
    <Typography
      variant="h4"
      component="h2"
      align="center"
      paragraph
    >
      {label}
    </Typography>
  </div>
);

export default Title;
