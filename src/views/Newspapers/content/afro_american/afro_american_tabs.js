import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MapContainer from "components/Map/map_container";
import periodical_data from "./content/data/periodical_data.json";
import periodical_info from "./content/periodical_info";
import AdsLayout from './content/ads_layout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const mapCenter = {"lon":-48.0007065,"lat":39.9622601}
  
  const origin = [
    -84.6804857,
    39.1362562
  ]
  const mapScale = 400;

  const mapForm = {
    selectHeader: "Periodical",
    selectFooter: "Select Date",
    tableLeft: "",
    tableRight: ""
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"   
          
        >
          <Tab label="Periodicals" {...a11yProps(0)} style={{fontSize: 15}}/>
          <Tab label="Advertisements" {...a11yProps(1)} style={{fontSize: 15}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <MapContainer 
            mapForm={mapForm}
            info={periodical_info} 
            mapData={periodical_data} 
            center={mapCenter} 
            origin={origin} 
            scale={mapScale}/>
        </TabPanel>        
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AdsLayout />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}


