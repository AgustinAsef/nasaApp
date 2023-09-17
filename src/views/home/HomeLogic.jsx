import { useState, useEffect } from "react";
import Nav from "../nav/Nav"
import Home from "./homeDetail/Home";
import DailyPic from "./dailyPic/DailyPic"
import Footer from "../footer/Footer";
import axios from "axios";

function HomeLogic() {

  const [nasaDialyPic , setNasaDialyPic] = useState()

  async function getDialyPic() {
    try {
      let promiseDialyPic = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=G7YnNEj29BzgDTZD8GtDeEJnfeIK44CoVXs0TOzV&count`);
      setNasaDialyPic(promiseDialyPic)
    } catch (error) {
      alert(error)
    }  
  }

  useEffect(()=>{
    getDialyPic()
  },[])

  if (nasaDialyPic) {
    return (
      <div>
        <Nav/>
        <Home/>
        <DailyPic nasaDialyPic={nasaDialyPic.data}/>
        <Footer/>
      </div>
    )  
  }else{
    return(
      <div>
        <Nav/>
        <Home/>
        <div>
          Loading ...
        </div>
        <Footer/>
      </div>
    )
  }

}

export default HomeLogic