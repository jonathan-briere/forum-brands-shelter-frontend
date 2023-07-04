import React from "react";
import PropTypes from "prop-types";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import { DOG, CAT } from "constants/dashboardConstants";

export const Tab = ({ value, onChange }) => {
  return (
    <BottomNavigation
      sx={{
        width: 300,
        mx: "auto",
        mb: "1rem",
        boxShadow: 3,
        borderRadius: "0.5rem",
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    >
      <BottomNavigationAction label="Dogs" value={DOG} />
      <BottomNavigationAction label="Cats" value={CAT} />
    </BottomNavigation>
  );
};

Tab.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
