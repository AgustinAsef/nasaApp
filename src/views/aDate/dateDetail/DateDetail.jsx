import { useEffect, useState } from "react";

import "./dateDetail.css"

function DateDetail(newDate) {  
  const [date, setDate]= useState()
  
  useEffect(()=>{
    setDate(newDate.newDate)
  },[newDate])
  
  if (date == null || undefined) {
    return(
      <div className="m p center">
        <h1>Ask a date...</h1>
      </div>      ) 
  }if(date == ''){
    return(
      <div className="m p center">
        <h1>Loading...</h1>
      </div>
    )
  }else{
    return(
      <section className="separationSectionLine center m p">        
        <h2>{date.date}</h2>
        <h2>{date.title}</h2>
        <div className="dateDetailImgContainer">
        <img src={date.url} alt="imagen de la fecha que consultaste" className="m dateDetailImg"/>
        <p className="dateDetailText p m">{date.explanation}</p>
        </div>
      </section>  
    )
  }
}

export default DateDetail