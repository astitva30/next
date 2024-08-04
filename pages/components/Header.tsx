import React, { useEffect, useRef, useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Popover, Button } from '@mui/material';
import profileLogo from "../images/profileLogo.png"
import { logoutRequest } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State to manage the Popover visibility
  const popoverRef = useRef<HTMLDivElement | null>(null); // Ref to manage clicks outside Popover

  // Open the Popover
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the Popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutRequest());
    handleClose();
  };

  // Close Popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
    };
  }, []);

  const open = Boolean(anchorEl);
  
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Technical Documentation Portal</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" style={{ marginLeft: '10px' }}>Hello, {username}</Typography>
          <Avatar onClick={handleClick} alt="Profile Logo" src="../images/profileLogo.png" />
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            ref={popoverRef} // Set ref for detecting clicks outside
          >
            <div style={{ padding: '10px' }}>
              <Button onClick={handleLogout} color="primary" variant="contained">
                Logout
              </Button>
            </div>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

