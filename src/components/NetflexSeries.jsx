import seriesData from "../api/seriesData.json"
import SeriesCard from "./SeriesCard";

export const NetflexSeries = () => {
  //   const name="When the Phone Rings";
  //   const rate="8.3";
  //   const summ="The most top rated and popular series of 2024 released in December."
  //   const age=12;

  // const returnGenre =()=> {
  //   const genre="Romantic+Thriller"
  //   return genre;
  // };
  // by using if statement("repeating of code prblm")
  // if(age<=18){
  //   return(
  //     <div>
  //     <div>
  //     <img src="rings.jpg" alt="rings.jpg" width={"40%"} height={"50%"}/>
  //     </div>
  //     <h2>Name:{name}</h2>
  //   <h3>Rating: {rate}</h3>
  //   <p>Summary:{summ}</p>
  //   <p>Genre: {returnGenre()}</p>
  //   <button>Not Available</button>
  //     </div>
  //   );
  // }

  return (
    <ul className="grid grid-three--cols">
      {
        seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} data={curElem} /> //passed two props
        ))
      }

    </ul>

  );
};

// Multiple components: 
export default NetflexSeries;

//  export const Header = ()=>{
//   return <h2>Korean and Chinese Dramas</h2>
//  }

//  export const Footer =()=>{
//   return <p>@shalbashaikh</p>
//  }
