import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup, { ButtonGroupProps } from '@material-ui/core/ButtonGroup';
import './MenuButtons.scss';

type ButtonsProps = ButtonGroupProps;

const MenuButtons: React.FC<ButtonGroupProps> = ({orientation}: ButtonsProps) => (
  <div className="MenuButtons" data-testid="MenuButtons">
    <ButtonGroup
      aria-label="menu"
      orientation={orientation}
    >
      {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'].map(content => (
        <Button key={content} aria-label={content} href={`#${content}`}>{content}</Button>
      ))}
    </ButtonGroup>
  </div>
);

export default MenuButtons;
