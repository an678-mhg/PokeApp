import React, { useEffect, useState } from "react";
import PokeList from "../components/PokeList";
import { Container } from "@mui/material";
import { getPokeApi } from "../api/pokeApi";
import Paginate from "../components/Paginate";
import Loading from "../components/Loading";

const Home = () => {
  const [poke, setPoke] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 12;

  const handlePrevious = () => {
    setOffset((prev) => prev - limit);
  };

  const handleNext = () => {
    setOffset((prev) => prev + limit);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getPokeApi(offset, limit);
        setPoke(res.data.results);
        setCount(res.data.count);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [offset]);

  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <Container>
        <PokeList poke={poke} />
      </Container>

      <Paginate
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        offset={offset}
        count={count}
      />

      {loading && <Loading />}
    </div>
  );
};

export default Home;
