import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MapContainer from "components/Map/map_container";

import Readers from "./content/sub_layout";

import Demise from "./content/demise_info";
import agentInfo from './content/data/agent_data.json';
import AdsLayout from './content/ads_layout';
import POLinfo from "./content/palladium_of_liberty_info";
import Content from "./content/content_info";
import Editors from "./content/agents_editors_info";

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
    flexGrow: 1,
    width: '100%',
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
  -83.0007065,
  39.9622601
]
 const mapScale = 600;
 const mapForm = {
   selectHeader: "Agent",
   selectFooter: "Select Agent",
   tableLeft: "Agent Name:",
   tableRight: "Agent Type:"
 }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary" 
          variant="scrollable"
          scrollButtons="auto"         
        >
          <Tab label="Palladium of Liberty" {...a11yProps(0)} style={{fontSize: 15}}/>
          <Tab label="Editors and Agents" {...a11yProps(1)} style={{fontSize: 15}}/>
          <Tab label="Readers and Subscribers" {...a11yProps(2)} style={{fontSize: 15}}/>
          <Tab label="Advertisements" {...a11yProps(3)} style={{fontSize: 15}}/>
          <Tab label="Content" {...a11yProps(4)} style={{fontSize: 15}}/>
          <Tab label="Demise" {...a11yProps(5)} style={{fontSize: 15}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <POLinfo/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MapContainer 
          mapForm={mapForm}
          info={Editors} 
          mapData={agentInfo} 
          center={mapCenter} 
          origin={origin} 
          scale={mapScale}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Readers />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <AdsLayout />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Content />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Demise />
        </TabPanel>        
      </SwipeableViews>
    </div>
  );
}


