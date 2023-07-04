import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { AddAnimalModal } from "components/AddAnimalModal";
import { AdoptModal } from "components/AdoptModal";

export const CardView = ({ object }) => (
  <Card sx={{ minWidth: 250, m: "0.5rem", boxShadow: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image={object?.image}
      alt={object?.name}
    />
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
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <AdoptModal>
        {object?.adopted ? (
          <Button variant="contained" color="success" size="small">
            Adopted
          </Button>
        ) : (
          <Button variant="contained" size="small">
            Adopt
          </Button>
        )}
      </AdoptModal>
      <AddAnimalModal object={object}>
        <Button variant="contained" size="small">
          Edit
        </Button>
      </AddAnimalModal>
    </CardActions>
  </Card>
);
