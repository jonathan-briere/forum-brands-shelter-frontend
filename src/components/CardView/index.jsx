import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { AddAnimalModal } from "components/AddAnimalModal";
import { AdoptModal } from "components/AdoptModal";
import { dateDifference } from "helper/dateHelper";

export const CardView = ({ object }) => (
  <Card sx={{ minWidth: 250, m: "0.5rem", boxShadow: 2 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {object?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Age: ${object.age}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Breed: ${object.name}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Weight: ${object.weight}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Been In Shelder: ${dateDifference(
          object.joined_at,
          object.adopted_at
        )} Days`}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      {object?.adopted ? (
        <AdoptModal color="success">Adopted</AdoptModal>
      ) : (
        <AdoptModal>Adopt</AdoptModal>
      )}
      <AddAnimalModal object={object}>Edit</AddAnimalModal>
    </CardActions>
  </Card>
);
