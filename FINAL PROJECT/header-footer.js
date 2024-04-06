const header = document.querySelector("header.vintagehead");
const footer = document.querySelector("header.vintagefooter");



header.innerHTML = `
            <nav class="nav">
                <a href="homepage.html"><img src="photos/logo-transparent-png.png" alt="Phone Logo"></a>
                <div class="nav-links" id="navLinks">
                    <img class="close-button" src="photos/close-line.png" onclick="hideMenu()" alt="hide-navbar">
                    <ul>
                      <li><a href="homepage.html">HOME</a></li>
                      <li><a href="aboutpage.html">ABOUT</a></li>
                      <li><a href="productpage.html">PRODUCTS</a></li>
                      <li><a href="contactpage.html">CONTACT</a></li>
                    </ul>
                </div>
                <img class="menu-button" src="photos/menu-line.png" onclick="showMenu()" alt="navbar-menu">
            </nav>
            <section  class="information">
              <h1 class="welcome">Welcome to Vintage Landlines!</h1>
              <p>Experience the Retro Charm of our Rotary Dial telephones as it combines nostalgia with modern functionality. Get ready to dial in style!</p>
              <a class="learnMore" href="productpage.html">Learn More</a>
            </section>
` ;

const footerSection = document.getElementById("vintagefooter");
footerSection.innerHTML =  `
<section id="footer-partners">
  <div>Our Partners</div> <div>item 02</div> <div>item 03</div>
</section>
<footer class="footer-distributed">

      <div class="footer-left">

        <h3>Company<span>logo</span></h3>

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>
          
          <a href="#">Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Company Name © 2015</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href="#" id="fa-facebook" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-github"></a>

        </div>

      </div>

    </footer>
`;







