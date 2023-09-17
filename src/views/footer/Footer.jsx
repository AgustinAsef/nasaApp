import linkEdinLogo from "../images/linkedin.png"
import gitHubLogo from "../images/github.png"
import "./footer.css"

function Footer() {

  return (
    <div className="">
      <footer className="footerDivContainer">
        <div className="m p footerDiv">
          <p>
          This page is the first where I implement some personal drawings to enhance the design and visual aspect of the page. Over time, I will be adding more designs          </p>
        </div>
        <div className="m p footerDiv">
          <a href="https://www.linkedin.com/in/agustin-battigane-asef/" className="m"><img src={linkEdinLogo} alt="logo de linkKedin" className="footerDivSocialMediaImg"/></a>
          <a href="https://github.com/AgustinAsef" className="m"><img src={gitHubLogo} alt="logo de linkKedin" className="footerDivSocialMediaImg"/></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer