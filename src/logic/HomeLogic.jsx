import { useState, useEffect } from "react";
import Nav from "../views/nav/Nav"
import Home from "../views/home/Home";
import DailyPic from "../views/dailyPic/DailyPic"
import Footer from "../views/footer/Footer";
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
          Cargando ...
        </div>
        <Footer/>
      </div>
    )
  }

}

export default HomeLogic