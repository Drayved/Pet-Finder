import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import NotFound from "./NotFound"
import PetSearch from "../apis/PetSearch";
import PetCards from "../components/PetCards";
export default function Cats(){


    return(
      <>
        <PetSearch type="cat"/>
        <PetCards num1={0} num2={20}/>
      </>

    )
}