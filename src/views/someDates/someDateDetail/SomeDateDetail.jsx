import { useEffect, useState } from "react";

import "./someDatesDetail.css"

function SomeDatesDetail(newDates) {  
  const [dates, setDates]= useState()
  
  useEffect(()=>{
    setDates(newDates.newDates)
  },[newDates])
  
  if (dates == null || undefined) {
    return(
      <div className="m p center">
        <h1>Consulta algunas fechas...</h1>
      </div>      ) 
  }if(dates == ''){
    return(
      <div className="m p center">
        <h1>Cargando...</h1>
      </div>
    )
  }else{
    return(
      <div>
        {dates.map((date)=>(
          <div className="m p datesDetailDivContainer" key={date.title}>
            <h1>{date.date}</h1>
            <h3>{date.title}</h3>
            <div className="datesDetailImgContainer">
              <img src={date.url} alt="imagen de la fecha que consultaste" className="m datesDetailImg"/>
              <h3 className="datesDetailText p m">{date.explanation}</h3>
            </div>
          </div>
        ))}        
      </div>
    )
  }
}

export default SomeDatesDetail