import "./Home.css";
import { useContext } from "react";
import { DataContext } from "../../";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { tripData } = useContext(DataContext);
  const navigate=useNavigate();
  //  console.log(tripData.continents);

//   const handleClick=(id,name)=>{
//     const formattedName = name.split(" ").join("_");
//     navigate(`/${formattedName}/${id}`);
//     console.log("clicked")
//   }
  return (
    <>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top continent for your next holiday</h2>
      <div className="responsive-grid">
        {tripData.continents.map((continent) => {
          const { id, name, image } = continent;
          return (
            <div className="card" key={id} onClick={()=>navigate(`/${name.split(" ").join("_")}/${id}`)} >
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
  );
}
