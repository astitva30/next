import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface SidebarProps {
  role: string;
  onTabClick: (tab: string) => void;
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role, onTabClick, activeTab }) => {
  const tabs: { [key: string]: string[] } = {
    PROJECT_MANAGER: ['Home', 'My Documents', 'Shared With Me', 'My Approvals', 'Users', 'Categories'],
    SOFTWARE_DEVELOPER: ['Home', 'My Documents', 'Shared With Me'],
    TECHNICAL_WRITER: ['Home', 'My Documents', 'Shared With Me'],
    SUPPORT: ['Home', 'My Documents', 'Shared With Me'],
    END_USER: ['Home', 'My Documents', 'Shared With Me']
  };

  return (
    <List component="nav" style={{ width: '200px', background: '#e5e5e5' }}>
      {tabs[role].map((tab) => (
        <ListItem 
          button 
          key={tab} 
          selected={activeTab === tab} 
          onClick={() => onTabClick(tab)}
        >
          <ListItemText primary={tab} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
