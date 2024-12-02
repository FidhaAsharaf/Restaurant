import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Import your individual food category components
import Starters from '../Menu/Starters';
import MainCourse from '../Menu/MainCourse';
import Drinks from '../Menu/Drinks';
import Desserts from '../Menu/Desserts';
import './Menu.css';

export default function RestaurantMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to render the correct component based on the selected tab
  const renderComponent = () => {
    switch (value) {
      case 0:
        return <Starters />;
      case 1:
        return <MainCourse />;
      case 2:
        return <Drinks />;
      case 3:
        return <Desserts />;
      default:
        return null;
    }
  };

  return (
    <Box className="tab-container">
      {/* Tabs with horizontal scroll for small devices */}
      <Box
        sx={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        className="d-flex flex-nowrap"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable" // Enables scrolling
          scrollButtons
          allowScrollButtonsMobile // Ensures scroll buttons appear on mobile
          aria-label="restaurant menu tabs"
          centered={false} // Avoid centering for better scrolling
        >
          <Tab label="Starters" />
          <Tab label="Main Course" />
          <Tab label="Drinks" />
          <Tab label="Desserts" />
        </Tabs>
      </Box>

      {/* Render the component based on the selected tab */}
      <Box sx={{ padding: 2 }}>{renderComponent()}</Box>
    </Box>
  );
}
