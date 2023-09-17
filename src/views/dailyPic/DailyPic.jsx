import { useEffect, useState } from "react";

import "./dialyPic.css"

function DialyPic(nasaDialyPic) {
  
  const [dialyPic, setDialyPic] = useState()

  useEffect(()=>{
    setDialyPic(nasaDialyPic.nasaDialyPic)
  },[nasaDialyPic])

  if (dialyPic) {
    return (
      <section className="dialyPicDivContainer separationSectionLine m p">
        <h2>Foto del dia</h2>
          <p>Fecha: {dialyPic.date}</p>
          <p>Titulo: {dialyPic.title}</p>
        <div className="dialyPicImgContainer m">
          <img src={dialyPic.url} alt="Imagen del dia" className="dialyPicImg"/>
        </div>
        <div className="dialyPicText m">
          <p className="m">{dialyPic.explanation}</p>
        </div>
      </section>
    )    
  }
}

export default DialyPic