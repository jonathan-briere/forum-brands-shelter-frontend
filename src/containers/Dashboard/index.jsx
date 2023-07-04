import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CardView } from "components/CardView";

import { Tab } from "./Tab";
import { DOG } from "constants/dashboardConstants";
import { fetchAnimals } from "actions/dashboardAction";

export const Dashboard = () => {
  const [animals, setAnimals] = useState([]);
  const [fetch, refetch] = useState(false);
  const [animalType, setAnimalType] = useState(DOG);

  useEffect(() => {
    fetchAnimals(animalType, setAnimals);
  }, [animalType, fetch]);

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

      <Tab value={animalType} onChange={setAnimalType} />

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {animals.length > 0 &&
          animals.map((data) => <CardView key={data.id} object={data} fetch={fetch} refetch={refetch} />)}
      </Container>
    </div>
  );
};
