import React, { useState } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconButton, Typography } from '@material-ui/core';
import ExcuseDialog from '../ExcuseDialog/ExcuseDialog';
import Alert from '@material-ui/lab/Alert';

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="Contact" data-testid="Contact" id="Contact">
      <Typography variant="h4" color="secondary" className="title">Get in Touch</Typography>
      <Alert severity="warning" className="note">This is just a sample. — These links are invalid.</Alert>
      <IconButton onClick={handleOpen}><FontAwesomeIcon icon={faGithub} color="#F3E5F5" size="lg"/></IconButton>
      <IconButton onClick={handleOpen}><FontAwesomeIcon icon={faFacebook} color="#F3E5F5" size="lg"/></IconButton>
      <IconButton onClick={handleOpen}><FontAwesomeIcon icon={faTwitter} color="#F3E5F5" size="lg"/></IconButton>
      <IconButton onClick={handleOpen}><FontAwesomeIcon icon={faInstagram} color="#F3E5F5" size="lg"/></IconButton>
      <ExcuseDialog open={isOpen} onClose={handleClose}/>
    </div>
  );
}
export default Contact;
