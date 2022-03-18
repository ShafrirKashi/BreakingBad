import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabs.css'
import EpisodeLine from '../../UIKit/EpisodeLine/EpisodeLine'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs({episodes, setSelected}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ color: "white", borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Season 1" {...a11yProps(0)} />
          <Tab label="Season 2" {...a11yProps(1)} />
          <Tab label="Season 3" {...a11yProps(2)} />
          <Tab label="Season 4" {...a11yProps(2)} />
          <Tab label="Season 5" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
         <EpisodeLine episodes={episodes} setSelected={setSelected} variant="season1" />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <EpisodeLine  episodes={episodes} setSelected={setSelected} variant="season2" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <EpisodeLine episodes={episodes} setSelected={setSelected} variant="season3" />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <EpisodeLine episodes={episodes} setSelected={setSelected} variant="season4" />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <EpisodeLine episodes={episodes} setSelected={setSelected} variant="season5" />
      </TabPanel>
    </Box>
  );
}

export default React.memo(BasicTabs)