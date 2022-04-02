import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePokeApi } from "../api/pokeApi";
import DetailsCard from "../components/DetailsCard";
import Loading from "../components/Loading";

const DetailsPokemon = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getOnePokeApi(name);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [name]);

  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DetailsCard data={data} />

      {loading && <Loading />}
    </div>
  );
};

export default DetailsPokemon;
