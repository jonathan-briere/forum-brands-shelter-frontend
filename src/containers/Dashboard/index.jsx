import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CardView } from "components/CardView";
import { DOG, CAT } from "constants/dashboardConstants";

export const Dashboard = () => {
  const [value, setValue] = useState();

  console.log(value);

  return (
    <div>
      <Typography
        sx={{ m: "2rem", flexWrap: "wrap" }}
        gutterBottom
        variant="h2"
        component="div"
      >
        Dashboard
      </Typography>

      <BottomNavigation
        sx={{ width: 300, mx: "auto", mb: "1rem", boxShadow: 3, borderRadius: "0.5rem" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Dogs" value={DOG} />
        <BottomNavigationAction label="Cats" value={CAT} />
      </BottomNavigation>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </Container>
    </div>
  );
};
