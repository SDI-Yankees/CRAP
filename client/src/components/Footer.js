import CRAPLogo from '../CRAPLogo.svg';

function Footer() {
  return (
    <footer class="pmd-footer bg-dark pmd-footer-dark">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <ul class="pmd-footer-nav">
              <li><a href="javascript:void(0);">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <a href="javascript:void(0);"><img src={CRAPLogo} style={{'width': 100, 'height': 100}}alt="logo"/></a>
			    </div>
            <div class="col-md-4 text-right">
              <div class="pmd-site-info">
                © 2021 A <strong>CRAP</strong> Theme.
				</div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;