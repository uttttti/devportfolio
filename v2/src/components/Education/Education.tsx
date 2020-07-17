import React, { useState, useEffect } from 'react';
import './Education.scss';
import { Paper, Typography, Container } from '@material-ui/core';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Title from '../Title/Title';
import { API_BASE_URL } from '../../constant';

interface Education {
  id: string;
  date: string;
  school: string;
  department: string;
  summary: string;
}

const Education: React.FC = () => {
  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    axios.get(API_BASE_URL + '/education')
      .then((res: AxiosResponse<Education[]>) => setEducations(res.data))
      .catch((err: AxiosError) => {
        setEducations(() => {
          throw err;
        })
      });
    }, []);
    
  return(
    <div className="Education" data-testid="Education" id="Education">
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
