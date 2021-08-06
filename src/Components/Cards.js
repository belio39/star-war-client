import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PEOPLE } from "../Queries/index";

function Cards() {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
}

export default Cards;
