import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { RouteComponentProps } from 'react-router-dom';
import Title from '../Title/Title';
import { Paper, Typography, Chip, Container } from '@material-ui/core';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface Project {
  id: string;
  title: string;
  summary: string;
  skills: Array<string>;
}

const Projects: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  const [projects, setExperiences] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/uttttti/uttttti.github.io/projects')
      .then((res: AxiosResponse<Project[]>) => setExperiences(res.data))
      .catch((err: AxiosError) => {
        routeProps.history.push('./error')
        throw err;
      });
    }, [routeProps.history]);

  return (
    <div className="Projects" data-testid="Projects" id="Projects">
      <Title label="Projects" />
      <Container>
        {projects.map((project: Project) => (
          <Paper key={project.id} elevation={0} variant="outlined" square className="box">
            <Typography variant="h6" component="h3" align="center">{project.title}</Typography>
            <Typography variant="body2" className="body">{project.summary}</Typography>
            <div className="skill-wrapper">
              {project.skills.map((skill: string, index) => (
                <Chip size="small" key={skill + index} label={skill} className="skill"></Chip>
              ))}
            </div>
          </Paper>
        ))}
      </Container>
    </div>
);
}
export default Projects;
