import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import PetCards from "../components/PetCards";
import PetSearch from "../apis/PetSearch";
export default function Dogs(){


    return(
      <>
        <PetSearch type="dog"/>
        <PetCards num1={0} num2={20}/>
      </>
      
    )
}