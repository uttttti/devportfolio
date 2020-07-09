import React from 'react';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectActivateMenu, changeActivateMenu } from '../../features/activateMenuSlice';

import './MenuButtons.scss';

type MenuButtonsProps = {
  orientation: 'vertical' | 'horizonal'
}

const MenuButtons: React.FC<MenuButtonsProps> = ({orientation}: MenuButtonsProps) => { 
 
  const activateMenu = useSelector(selectActivateMenu);
  const dispatch = useDispatch();

  const updateActivateContent = (content: string) => {
    dispatch(changeActivateMenu(content))
  }
  
  const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <div className="MenuButtons" data-testid="MenuButtons">
      {/* TODO: 確認用に出力しているだけなのであとで消す */}
      {activateMenu}
      <List
        aria-label="menu"
        className={orientation}
      >
        {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'].map(content => (
          <ListItemLink key={content} aria-label={content} href={`#${content}`} onClick={e => updateActivateContent(content)}>{content}</ListItemLink>
        ))}
      </List>
    </div>
  )
};

export default MenuButtons;
