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
footerSection.innerHTML = `
    <!-- Your footer HTML content here -->

<footer class="footer-distributed">

      <div class="footer-left">

        <h3>Telecomm<span>logo</span></h3>

        <p class="footer-links">
          <a href="homepage.html" class="link-1">Home</a>
        
          <a href="productpage.html">Pricing</a>
        
          <a href="aboutpage.html">About</a>
          
          <a href="contactpage.html">Contact</a>
        </p>

        <p class="footer-company-name"></p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>1 Georgian Dr, Barrie, ON L4M 3X9</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.123.456.789</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@telecomm.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the company</span>
          Telecomm where nostalgia meets innovation in the world of retro telephones.
          
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

// Get the footer company name element
const footerCompanyName = document.querySelector(".footer-company-name");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the current year
footerCompanyName.textContent = `Telecomm © ${currentYear}`;


