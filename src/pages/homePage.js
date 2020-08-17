import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import TopMenu from '../components/topMenu';
import MainContent from '../components/mainContent';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
  }));

function Home() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <SideMenu />
        <TopMenu />
        <MainContent />
        <Footer />
      </div>
    );
  }
  
  export default Home;