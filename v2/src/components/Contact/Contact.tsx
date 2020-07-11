import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconButton, Typography } from '@material-ui/core';

const Contact: React.FC = () => (
  <div className="Contact" data-testid="Contact">
    <Typography variant="h5" color="secondary" className="title">Get in Touch</Typography>
    <IconButton href="https://github.com/uttttti"><FontAwesomeIcon icon={faGithub} color="#F3E5F5" size="lg"/></IconButton>
    <IconButton href="https://www.facebook.com/uttttti"><FontAwesomeIcon icon={faTwitter} color="#F3E5F5" size="lg"/></IconButton>
    <IconButton href="https://twitter.com/0345"><FontAwesomeIcon icon={faFacebook} color="#F3E5F5" size="lg"/></IconButton>
    <IconButton href="https://www.instagram.com/miyoko/"><FontAwesomeIcon icon={faInstagram} color="#F3E5F5" size="lg"/></IconButton>
  </div>
);

export default Contact;
