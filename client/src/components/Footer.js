import CRAPLogo from '../CRAPLogo.svg';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer class="pmd-footer bg-dark pmd-footer-dark">
      <div class="container" style={{ 'margin': '200px' }}>
        <img src={CRAPLogo} style={{ 'width': 100, 'height': 100, 'display': 'inline' }} alt="logo" />
        <div class="pmd-site-info" style={{ 'display': 'inline' }}>
          © 2021 A <strong>CRAP</strong> Theme
				      </div>
      </div>
    </footer>
  )
}

export default Footer;