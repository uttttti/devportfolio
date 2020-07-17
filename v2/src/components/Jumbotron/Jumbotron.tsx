import React from 'react';
import './Jumbotron.scss';
import { Avatar, makeStyles, createStyles, Theme, Button, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

const Jumbotron: React.FC = () => {
  const classes = useStyles();
  return(
    <div className="Jumbotron" data-testid="Jumbotron">
      <Alert severity="warning"　variant="filled" className="warning" color="info">まだ制作途中です。</Alert>
      <Avatar alt="Miyoko Hirao" src="/static/image/avator.jpg" className={classes.large}/>
      <dl className="outline">
        <dt><Typography variant="h4" component="h1">MIYOKO HIRAO</Typography></dt> 
        <dd><Typography variant="h6">Frontend Engineer && Web Director</Typography></dd>
      </dl>
      <Button variant="outlined" size="small" color="secondary" href="./resume.pdf" download>Download PDF</Button>
    </div>
  );  
}

export default Jumbotron;
