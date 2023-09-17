import jupiter from "../images/jupiter.png"
import venus from "../images/venus.png"
import marte from "../images/marte.png"
import mercurio from "../images/mercurio.png"
import neptuno from "../images/neptuno.png"
import saturno from "../images/saturno.png"
import tierra from "../images/tierra.png"
import urano from "../images/urano.png"

import galaxiaImg1 from '../images/galaxia1.png'
import galaxiaImg2 from '../images/galaxia2.png'
import galaxiaImg3 from '../images/galaxia3.png'
import galaxiaImg4 from '../images/galaxia4.png'
import galaxiaImg5 from '../images/galaxia5.png'
import galaxiaImg6 from '../images/galaxia6.png'
import galaxiaImg7 from '../images/galaxia7.png'
import galaxiaImg8 from '../images/galaxia8.png'
import galaxiaImg9 from '../images/galaxia9.png'

import "./home.css"
import '../pruebasDeAnimacion.css'

function Home() {
  return (
    <div>
      <div className="homeIntroductionDivContainer m p">
        <p className="m p homeIntroductionDivText">
         La NASA ofrece una fascinante API de Imágenes Históricas que te permite explorar el vasto archivo visual de la agencia espacial. 
          Con esta herramienta, los entusiastas del espacio, investigadores y curiosos pueden ingresar una fecha específica y 
         recibir una imagen capturada por una de las numerosas misiones espaciales llevadas a cabo por la NASA en ese día particular.        
        </p>
        <div className='divAnimationGalaxiContainer'>
          <img src={galaxiaImg1} alt="" className='galaxiImg'/>
          <img src={galaxiaImg2} alt="" className='galaxiImg galaxiImg1'/>
          <img src={galaxiaImg3} alt="" className='galaxiImg galaxiImg2'/>
          <img src={galaxiaImg4} alt="" className='galaxiImg galaxiImg3'/>
          <img src={galaxiaImg5} alt="" className='galaxiImg galaxiImg4'/>
          <img src={galaxiaImg6} alt="" className='galaxiImg galaxiImg5'/>
          <img src={galaxiaImg7} alt="" className='galaxiImg galaxiImg6'/>
          <img src={galaxiaImg8} alt="" className='galaxiImg galaxiImg7'/>
          <img src={galaxiaImg9} alt="" className='galaxiImg galaxiImg8'/>
        </div>
      </div>
      <div className="homeIntroductionDivPlanetsContainer">
          <section className="separationSectionLine m p">
              <h2 className="m p">Los planetas de nuesto sistema solar</h2>
              <div className="homeIntroductionDivPlanetsDetail">
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Mercurio</h2>
                  <img src={mercurio} alt="planeta mercurio" className="planetsSectionsImg"/>
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Es el planeta más cercano al Sol y también el más pequeño del sistema solar. Debido a su cercanía al Sol, 
                    las temperaturas en la superficie de Mercurio pueden superar los 400 grados Celsius durante el día, 
                    pero en la noche caen drásticamente a -180 grados Celsius.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                <h2>Venus</h2>
                  <img src={venus} alt="planeta venus" className="planetsSectionsImg"/>
                  <p className="homeIntroductionDivPlanetsDetailText"> 
                    Venus es conocido como el Planeta Gemelo de la Tierra debido a su tamaño y composición similar. 
                    Sin embargo, es inhóspito y posee una atmósfera densa compuesta principalmente de dióxido de carbono, 
                    con temperaturas que pueden llegar a ser más altas que las de Mercurio, a pesar de estar más alejado del Sol.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Tierra</h2>
                  <img src={tierra} alt="planeta tierra" className="planetsSectionsImg"/>
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Es el único planeta conocido que tiene agua en estado líquido en su superficie, 
                    lo que es esencial para la existencia de vida tal como la conocemos. 
                    Además, la Tierra es el único planeta donde se sabe que hay vida.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Marte</h2>
                  <img src={marte} alt="planeta marte" className="planetsSectionsImg"/>                
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Marte es a menudo llamado el Planeta Rojo debido a su característico color rojizo. 
                    Tiene la montaña más alta del sistema solar, 
                    el Monte Olimpo, que es aproximadamente tres veces más alta que el Monte Everest en la Tierra.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Jupiter</h2>
                  <img src={jupiter} alt="planeta jupiter" className="planetsSectionsImg"/>             
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Júpiter es el planeta más grande del sistema solar y tiene más masa que todos los demás planetas combinados. 
                    También tiene la Gran Mancha Roja, una tormenta gigantesca que ha estado activa durante al menos 350 años.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Saturno</h2>
                  <img src={saturno} alt="planeta saturno" className="planetsSectionsImg"/>              
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Saturno es famoso por sus impresionantes anillos, 
                    que están compuestos principalmente de fragmentos de hielo y roca. 
                    Estos anillos son enormes y pueden extenderse a más de 280,000 kilómetros de diámetro.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Urano</h2>
                  <img src={urano} alt="planeta urano" className="planetsSectionsImg"/>                
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Urano es único en el sistema solar porque gira sobre su lado. 
                    Esto significa que su eje de rotación está inclinado casi 90 grados en relación con los otros planetas. 
                    En otras palabras, en lugar de girar como un trompo, Urano rueda como una pelota.
                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center">
                  <h2>Neptuno</h2>
                  <img src={neptuno} alt="planeta neptuno" className="planetsSectionsImg"/>        
                  <p className="homeIntroductionDivPlanetsDetailText">
                    Es el planeta más alejado del Sol y también el más ventoso del sistema solar. 
                    Tiene velocidades de viento récord que superan los 2,100 kilómetros por hora, 
                    y cuenta con una atmósfera rica en metano, lo que le da su característico color azul.
                  </p>
                </div>        
              </div>
          </section>
      </div>
    </div>
  )
}

export default Home