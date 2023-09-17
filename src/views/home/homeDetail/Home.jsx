import jupiter from "../../images/jupiter.png"
import venus from "../../images/venus.png"
import marte from "../../images/marte.png"
import mercurio from "../../images/mercurio.png"
import neptuno from "../../images/neptuno.png"
import saturno from "../../images/saturno.png"
import tierra from "../../images/tierra.png"
import urano from "../../images/urano.png"

import galaxiaImg1 from '../../images/galaxia1.png'
import galaxiaImg2 from '../../images/galaxia2.png'
import galaxiaImg3 from '../../images/galaxia3.png'
import galaxiaImg4 from '../../images/galaxia4.png'
import galaxiaImg5 from '../../images/galaxia5.png'
import galaxiaImg6 from '../../images/galaxia6.png'
import galaxiaImg7 from '../../images/galaxia7.png'
import galaxiaImg8 from '../../images/galaxia8.png'
import galaxiaImg9 from '../../images/galaxia9.png'

import "./home.css"
import "../imgHomeAnimatio.css"

function Home() {
  return (
    <div>
      <div className="homeIntroductionDivContainer m p">
        <p className="m p homeIntroductionDivText">
        NASA offers a fascinating Historical Images API that allows you to explore the vast visual archive of the space agency. With this tool, space enthusiasts, researchers, and curious minds can input a specific date and receive an image captured by one of the numerous space missions conducted by NASA on that particular day.</p>
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
                  It is the planet closest to the Sun and also the smallest in the solar system. Due to its proximity to the Sun, temperatures on the surface of Mercury can exceed 400 degrees Celsius during the day, but at night, they plummet drastically to -180 degrees Celsius.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                <h2>Venus</h2>
                  <img src={venus} alt="planeta venus" className="planetsSectionsImg"/>
                  <p className="homeIntroductionDivPlanetsDetailText"> 
                  Venus is known as Earths sister planet due to its similar size and composition. However, it is inhospitable and has a dense atmosphere primarily composed of carbon dioxide, with temperatures that can become even hotter than those on Mercury, despite being farther from the Sun.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Tierra</h2>
                  <img src={tierra} alt="planeta tierra" className="planetsSectionsImg"/>
                  <p className="homeIntroductionDivPlanetsDetailText">
                  It is the only known planet that has liquid water on its surface, which is essential for the existence of life as we know it. Furthermore, Earth is the only planet where it is known that life exists.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Marte</h2>
                  <img src={marte} alt="planeta marte" className="planetsSectionsImg"/>                
                  <p className="homeIntroductionDivPlanetsDetailText">
                  Mars is often referred to as the Red Planet due to its distinctive reddish color. It boasts the tallest mountain in the solar system, Mount Olympus, which is roughly three times higher than Mount Everest on Earth.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Jupiter</h2>
                  <img src={jupiter} alt="planeta jupiter" className="planetsSectionsImg"/>             
                  <p className="homeIntroductionDivPlanetsDetailText">
                  Jupiter is the largest planet in the solar system and has more mass than all the other planets combined. It also boasts the Great Red Spot, a gigantic storm that has been active for at least 350 years.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Saturno</h2>
                  <img src={saturno} alt="planeta saturno" className="planetsSectionsImg"/>              
                  <p className="homeIntroductionDivPlanetsDetailText">
                  Saturn is famous for its impressive rings, which are primarily composed of ice and rock fragments. These rings are enormous and can extend to over 280,000 kilometers in diameter.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center p">
                  <h2>Urano</h2>
                  <img src={urano} alt="planeta urano" className="planetsSectionsImg"/>                
                  <p className="homeIntroductionDivPlanetsDetailText">
                  Uranus is unique in the solar system because it spins on its side. This means its axis of rotation is tilted almost 90 degrees in relation to the other planets. In other words, instead of spinning like a top, Uranus rolls like a ball.                  </p>
                </div>
                <div className="homeIntroductionDivPlanetsDetailContainer center">
                  <h2>Neptuno</h2>
                  <img src={neptuno} alt="planeta neptuno" className="planetsSectionsImg"/>        
                  <p className="homeIntroductionDivPlanetsDetailText">
                  It is the farthest planet from the Sun and also the windiest in the solar system. It has record-breaking wind speeds that exceed 2,100 kilometers per hour, and boasts an atmosphere rich in methane, which gives it its distinctive blue color.                  </p>
                </div>        
              </div>
          </section>
      </div>
    </div>
  )
}

export default Home