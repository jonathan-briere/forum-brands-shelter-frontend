import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { CardView } from "components/CardView";
import { AddAnimalModal } from "components/AddAnimalModal";

import { Tab } from "./Tab";
import { animalData, DOG } from "constants/dashboardConstants";

export const Dashboard = () => {
  const [value, setValue] = useState(DOG);

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
        {animalData.map((data) => (
          <CardView key={data.name} object={data} />
        ))}
      </Container>
    </div>
  );
};
