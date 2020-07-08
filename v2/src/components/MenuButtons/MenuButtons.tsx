import React from 'react';
import './MenuButtons.scss';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

type MenuButtonsProps = {
  orientation: 'vertical' | 'horizonal'
}

const MenuButtons: React.FC<MenuButtonsProps> = ({orientation}: MenuButtonsProps) => {

  const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <div className="MenuButtons" data-testid="MenuButtons">
      <List
        aria-label="menu"
        className={orientation}
      >
        {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'].map(content => (
          <ListItemLink button key={content} aria-label={content} href={`#${content}`}>{content}</ListItemLink>
        ))}
      </List>
    </div>
  )
};

export default MenuButtons;
