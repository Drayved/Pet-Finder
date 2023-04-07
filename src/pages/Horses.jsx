import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import NotFound from "./NotFound";
import PetCards from "../components/PetCards";
import PetSearch from "../apis/PetSearch";
export default function Horses() {


  return (
    <>
      <PetSearch type="horse"/>
      <PetCards num1={0} num2={20} />
    </>

  );
}

