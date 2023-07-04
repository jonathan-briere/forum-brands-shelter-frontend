import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardView = ({ object }) => (
  <Card sx={{ minWidth: 250, m: "0.5rem", boxShadow: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image={object?.image}
      alt={object?.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {object?.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {object?.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
