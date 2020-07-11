import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Title from '../Title/Title';
import './About.scss';

const About: React.FC = () => (
  <div className="About" data-testid="About">
    <Container>
      <Title label="About"></Title>
      <Typography variant="body2">平尾 美代子です。Webディレクターやチームリーダー経験の方が長いですが、現在はフロントエンドエンジニア歴約4年です。ほぼ独学、かつトライ&エラーで乗り切ってきたので、知識も経験も最前線にいるわけではない自覚はありますが、どんな環境であっても意欲的に取り組む所存です。</Typography>
    </Container>
  </div>
);

export default About;
