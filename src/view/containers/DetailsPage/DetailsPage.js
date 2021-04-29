import React from "react";
import { useParams } from "react-router";

const DetailsPage = () => {
  const { id } = useParams()
  console.log(id)
  return(
    <>ID is {id}</>
  )
}

export default DetailsPage;
