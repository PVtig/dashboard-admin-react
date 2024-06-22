import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tabs } from '@mui/material';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';

export default function EmployeeForms() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
    <Box sx={{ width: '100%' }}>
      <TabList
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="ADD" />
        <Tab value="2" label="UPDATE" />
        <Tab value="3" label="Item Three" />
      </TabList>
    </Box>
        <TabPanel value="1"><AddEmployee /></TabPanel>
        <TabPanel value="2"><UpdateEmployee /></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
