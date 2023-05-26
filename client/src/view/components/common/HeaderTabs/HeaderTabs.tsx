import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { tabs } from './tabs';
import { Link } from 'react-router-dom';

export const HeaderTabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (evt: SyntheticEvent, newValue: number) => {
    evt.preventDefault();
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} onChange={handleChange}>
      {tabs.map((tab) => (
        <Tab key={tab.id} component={Link} to={tab.path} label={tab.title} />
      ))}
    </Tabs>
  );
};
