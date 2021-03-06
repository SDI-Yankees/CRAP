import CRAPLogo from '../CRAPLogo.svg';
import '../CSS/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <div style={{fontWeight:'bold'}}>
          Training Manager Contact Info 
          <br/>
          <br/>
          Help 
        </div>
      </div>
      <div className="center-footer">
        <div className="card">
          <div className="content">
            <div className="front">
              About the Dev Team
            </div>
            <div className="back">
              Sam - likes CRAP
              <br/>
              Eric - does CRAP
              <br/>
              Jeremy - sees CRAP
              <br/>
              Derek - lives CRAP
            </div>
          </div>
        </div>
      </div>
      <div className="right-footer">
        <div className="logo-container">
          <img src={CRAPLogo} alt="logo" />
          <div class="pmd-site-info">
            © 2021 A <strong>CRAP</strong> Theme
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;