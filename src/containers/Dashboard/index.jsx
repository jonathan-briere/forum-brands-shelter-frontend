import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CardView } from "components/CardView";
import { AddAnimalModal } from "components/AddAnimalModal";

import { Tab } from "./Tab";
import { DOG } from "constants/dashboardConstants";
import { fetchAnimals } from "actions/dashboardAction";

export const Dashboard = () => {
  const [animals, setAnimals] = useState([]);
  const [animalType, setAnimalType] = useState(DOG);

  useEffect(() => {
    fetchAnimals(animalType, setAnimals);
  }, [animalType]);

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
        <AddAnimalModal>Add</AddAnimalModal>
      </Container>

      <Tab value={animalType} onChange={setAnimalType} />

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {animals.length > 0 &&
          animals.map((data) => <CardView key={data.name} object={data} />)}
      </Container>
    </div>
  );
};
