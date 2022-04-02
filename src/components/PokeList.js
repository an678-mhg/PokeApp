import { Grid } from "@mui/material";
import PokeCard from "./PokeCard";

const PokeList = ({ poke }) => {
  return (
    <Grid container spacing={4}>
      {poke?.map((p) => (
        <Grid key={p.name} item lg={3} md={4} sm={6} xs={12}>
          <PokeCard p={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokeList;
