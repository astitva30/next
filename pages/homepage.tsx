'use client'
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Grid, Container } from '@mui/material'; // Import Grid for layout
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import preventPageRefresh from './hooks/preventPageRefresh'
import SnackbarComponent from './components/SnackbarComponent';

import dynamic from 'next/dynamic';

const HomePage: React.FC = () => {
    // preventPageRefresh();
    const auth = useSelector((state: RootState) => state.auth);
    const userRole: string = auth.role || '';
    const [selectedTab, setSelectedTab] = useState<string>('Home');

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    })
    return (
        <>
            {auth.token && isClient?
                (
                    <div>
                        <Header username="hello@example.com" />
                        <Grid container style={{ marginTop: 10 }}>
                            <Grid item xs={3} style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
                                <Sidebar role={userRole} onTabClick={(tab: string) => { console.log(tab); setSelectedTab(tab) }} activeTab={selectedTab} />
                            </Grid>
                            <Grid item xs={9} style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
                                <MainContent activeTab={selectedTab} />
                            </Grid>
                        </Grid>
                        <SnackbarComponent />
                    </div>
                )
                :
                (
                    <>
                    <SnackbarComponent />
                    <h1>Please Login</h1>
                    </>
                )
            }
        </>
    );
};

export default HomePage;


