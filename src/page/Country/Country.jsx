import "./Country.css";
import { useContext } from "react";
import { DataContext } from "../../";
import { useParams,useNavigate } from "react-router-dom";

export function Country(){
    const {tripData}=useContext(DataContext);
    const {id}=useParams();
    const navigate=useNavigate();

    const selectedContinent=tripData.continents.find((cont)=>cont.id===Number(id));
    // console.log(selectedContinent);

    const {name,countries}=selectedContinent;

    return(
        <>
        <h1>Top Countries in {name} for your next holiday</h1>
        <div className="responsive-grid" >
        {countries.map((country) => {
          const { id, name, image } = country;
          return (
            <div className="card counties-card" key={id} onClick={()=>navigate(`/${name.split(" ").join("_")}/${id}`)}>
              <img src={image} alt={name} className="card-img" />
              <p>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                {name}
              </p>
            </div>
          );
        })}
      </div>
        </>
    )
}