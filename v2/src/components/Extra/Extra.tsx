import React, { useState, useEffect } from 'react';
import './Extra.scss';
import Alert from '@material-ui/lab/Alert';
import { Button, Slide, Container, Typography } from '@material-ui/core';
import Error from '../Error/Error';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import axios, { AxiosResponse, AxiosError } from 'axios';


interface Foo {
  id: string;
  date: string;
  school: string;
  department: string;
  summary: string;
}

const Extra: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const switchErrorView = () => {
    setIsShow(!isShow)
  }
  
  const ImpersonationApiError: React.FC = () => {
    const [fooData, setFooData] = useState<Foo[]>([]);
    useEffect(() => {
      axios.get(process.env.REACT_APP_API_ENDPOINT + '/foo')
      .then((res: AxiosResponse<Foo[]>) => setFooData(res.data))
      .catch((err: AxiosError) => {
        setFooData(() => {
          throw err;
        })
      });
    }, []);
    return (
      <div>{fooData} should get an error!</div>
    )
  }

  return (
    <div className="Extra" data-testid="Extra">
      <Alert severity="info">I'm doing experiment in the area below from here.</Alert>
      <div className="btn-wrapper">
        <Button variant="contained" color="primary" size="small" onClick={ _e => switchErrorView()}>{isShow? 'hide': 'show'} Error Component</Button>
      </div>
      <Slide direction="up" in={isShow} mountOnEnter unmountOnExit>
        <div>
          <Error />
        </div>
      </Slide>
      <Container className="container">
        <Typography variant="caption">Here is a sample impersonating an API error and ErrorBoundary.</Typography>
        <ErrorBoundary>{()=> <ImpersonationApiError />}</ErrorBoundary>
      </Container>
    </div>
  );
}
export default Extra;
