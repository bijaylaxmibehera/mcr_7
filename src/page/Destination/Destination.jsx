import "./Destination.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../";

export function Destination(){
  const {tripData}=useContext(DataContext);
  const {id,countryId}=useParams();

//   const selectedCountry = tripData.continents.find((cont) => cont.id === Number(id)).countries.find((country) => country.id === Number(countryId));

//   console.log(selectedCountry);

    return (
        <>
        <h1>Top destination in for next holiday</h1>
        </>
    )
}