import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { useDispatch } from 'react-redux';
import { closeDrawer } from '../../features/drawerSlice';

import './MenuButtons.scss';

type MenuButtonsProps = {
  orientation: 'vertical' | 'horizonal'
}

const MenuButtons: React.FC<MenuButtonsProps> = ({orientation}: MenuButtonsProps) => { 
 
  const dispatch = useDispatch();

  const updateActivateContent = () => {
    dispatch(closeDrawer())
  }
  
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
          <ListItemLink key={content} aria-label={content} href={`#${content}`} onClick={_e => updateActivateContent()}>{content}</ListItemLink>
        ))}
      </List>
    </div>
  )
};

export default MenuButtons;
