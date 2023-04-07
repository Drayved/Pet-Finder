import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import NotFound from "./NotFound"
import PetSearch from "../apis/PetSearch";
import PetCards from "../components/PetCards";

export default function Birds(){

    return(
      <>
        <PetSearch type="bird" />
        <PetCards num1={0} num2={20}/>
      </>

    )
}