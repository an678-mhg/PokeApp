import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function PokeCard({ p }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
            p?.url?.split("/")[6]
          }.png`}
          alt={p.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {p?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {p?.url}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained">
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
            to={`/${p.name}`}
          >
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
