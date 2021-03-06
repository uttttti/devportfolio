import React, { useState, useEffect } from 'react';
import './Projects.scss';
import Title from '../Title/Title';
import { Paper, Typography, Chip, Container } from '@material-ui/core';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface Project {
  id: string;
  title: string;
  summary: string;
  skills: Array<string>;
}

const Projects: React.FC = () => {
  const [projects, setExperiences] = useState<Project[]>([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_ENDPOINT + '/projects')
      .then((res: AxiosResponse<Project[]>) => setExperiences(res.data))
      .catch((err: AxiosError) => {
        setExperiences(() => {
          throw err;
        })
      });
    }, []);

  return (
    <div className="Projects" data-testid="Projects" id="Projects">
      <Title label="Projects" />
      <div className="wrapper">
        <Container>
          {projects.map((project: Project) => (
            <Paper key={project.id} elevation={0} variant="outlined" square className="box">
              <Typography variant="h6" component="h3" align="center">{project.title}</Typography>
              <Typography variant="body2" className="body">{project.summary}</Typography>
              <div className="skill-wrapper">
                {project.skills.map((skill: string, index) => (
                  <Chip size="small" color="secondary" key={skill + index} label={skill} className="skill"></Chip>
                ))}
              </div>
            </Paper>
          ))}
        </Container>
      </div>
    </div>
);
}
export default Projects;
