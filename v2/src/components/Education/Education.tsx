import React, { useState, useEffect } from 'react';
import './Education.scss';
import { RouteComponentProps } from 'react-router-dom';
import { Paper, Typography, Container } from '@material-ui/core';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Title from '../Title/Title';

interface Education {
  id: string;
  date: string;
  school: string;
  department: string;
  summary: string;
}

const Education: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/uttttti/devportfolio/education/')
      .then((res: AxiosResponse<Education[]>) => setEducations(res.data))
      .catch((err: AxiosError) => {
        routeProps.history.push('./error')
        throw err;
      });
    }, [routeProps.history]);
    
  return(
    <div className="Education" data-testid="Education" id="#Education">
      <Title label="Education" />
      <Container>
        {educations.map((education: Education) => (
          <Paper key={education.id} elevation={0} variant="outlined" square className="box">
            <Typography variant="h6" component="h3">{education.school}</Typography>
            <Typography variant="subtitle2" component="h4" color="textSecondary">{education.department}</Typography>
            <Typography variant="subtitle2" component="h4" color="textSecondary">{education.date}</Typography>
            <Typography variant="body2" className="body">{education.summary}</Typography>
          </Paper>
        ))}
      </Container>
    </div>
  );
}

export default Education;
