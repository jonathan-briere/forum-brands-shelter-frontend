import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { CardView } from "components/CardView";
import { AddAnimalModal } from "components/AddAnimalModal";

import { Tab } from "./Tab";

export const Dashboard = () => {
  const [value, setValue] = useState();

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

      <Container sx={{ textAlign: "end" }}>
        <AddAnimalModal>
          <Button variant="contained">Add Animal</Button>
        </AddAnimalModal>
      </Container>

      <Tab value={value} onChange={setValue} />

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
