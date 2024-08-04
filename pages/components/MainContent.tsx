import React from 'react';
import { Button, Typography } from '@mui/material';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const content: { [key: string]: JSX.Element } = {
    Home: <Typography>Welcome to the Home page!</Typography>,
    'My Documents': <Typography>Here are your documents.</Typography>,
    'Shared With Me': <><Typography>Documents shared with you.</Typography><Button href='#' onClick={()=>{}}>download</Button></>,
    'My Approvals': <Typography>Your approvals.</Typography>,
    Users: <Typography>User management.</Typography>,
    Categories: <Typography>Categories management.</Typography>
  };

  return (
    <main style={{ padding: '1rem', flexGrow: 1 }}>
      {content[activeTab] || <Typography>Select a tab to view content.</Typography>}
    </main>
  );
};

export default MainContent;
