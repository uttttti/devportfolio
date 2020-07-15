import React, { useState, useEffect } from 'react';
import './Experience.scss';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Title from '../Title/Title';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RoomIcon from '@material-ui/icons/Room';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router-dom';

interface Experience {
  id: string;
  date: string;
  company: string;
  occupation: string;
  summary: string;
}

const Experience: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/uttttti/uttttti.github.io/experience')
      .then((res: AxiosResponse<Experience[]>) => setExperiences(res.data))
      .catch((err: AxiosError) => {
        routeProps.history.push('./error')
        throw err;
      });
    }, [routeProps.history]);

  return (
    <div className="Experience" data-testid="Experience" id="Experience">
      <Title label="Experience" />
      <Timeline className="timeline">
        {experiences.map((experience: Experience) => (
          <TimelineItem key={experience.id}>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <RoomIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="subtitle1" color="textSecondary">{experience.date}</Typography>
            <Paper elevation={0} variant="outlined" square className="box">
              <Typography variant="h6" component="h3">{experience.company}</Typography>
              <Typography variant="subtitle2" component="h4" color="textSecondary">{experience.occupation}</Typography>
              <Typography variant="body2" className="body">{experience.summary}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Experience;
