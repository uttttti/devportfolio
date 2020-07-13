import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { RouteComponentProps } from 'react-router-dom';
import Title from '../Title/Title';
import { Chip, Container } from '@material-ui/core';
import axios, { AxiosResponse, AxiosError } from 'axios';

type Skills = {
  item: Array<string>
};

const Skills: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  const [skills, setSkills] = useState<Skills["item"]>([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/uttttti/devportfolio/skills')
      .then((res: AxiosResponse<Skills>) => setSkills(res.data.item))
      .catch((err: AxiosError) => {
        routeProps.history.push('./error')
        throw err;
      });
    }, [routeProps.history]);
  
  return (
    <div className="Skills" data-testid="Skills">
      <Title label="Skills" />
      <Container className="skills-wrapper">
        {skills.map((skill: string, index) => (
          <Chip key={skill + index} label={skill} className="skill"></Chip>
        ))}
      </Container>
    </div>
);
}

export default Skills;
