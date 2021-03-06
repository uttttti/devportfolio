import React, { useState, useEffect } from 'react';
import './Skills.scss';
import Title from '../Title/Title';
import { Chip, Container } from '@material-ui/core';
import axios, { AxiosResponse, AxiosError } from 'axios';

type Skills = {
  item: Array<string>
};

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skills["item"]>([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_ENDPOINT + '/skills')
      .then((res: AxiosResponse<Skills>) => setSkills(res.data.item))
      .catch((err: AxiosError) => {
        setSkills(()=>{
          throw err;
        })
      });
    }, []);
  
  return (
    <div className="Skills" data-testid="Skills" id="Skills">
      <Title label="Skills" />
      <Container className="skills-wrapper">
        {skills.map((skill: string, index) => (
          <Chip color="secondary" key={skill + index} label={skill} className="skill"></Chip>
        ))}
      </Container>
    </div>
);
}

export default Skills;
