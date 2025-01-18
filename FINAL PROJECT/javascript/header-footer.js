// Selects the header element with the class "vintagehead"
const header = document.querySelector("header.vintagehead");

// Selects the footer element with the class "vintagefooter"
const footer = document.querySelector("header.vintagefooter");

// Sets the inner HTML content of the header
header.innerHTML = `
            <nav class="nav">
                <a href="index.html"><img src="photos/logo-transparent-png.png" alt="Phone Logo"></a>
                <div class="nav-links" id="navLinks">
                <i class="fa fa-times" aria-hidden="true" onclick="hideMenu()" alt="hide-navbar"></i> 
                    <ul>
                      <li><a href="index.html">HOME</a></li>
                      <li><a href="aboutpage.html">ABOUT</a></li>
                      <li><a href="productpage.html">PRODUCTS</a></li>
                      <li><a href="contactpage.html">CONTACT</a></li>
                    </ul>
                </div>
                <i class="fa fa-bars" aria-hidden="true"onclick="showMenu()" alt="navbar-menu"></i> 
            </nav>
` ;

// Selects the footer section element with the ID "vintagefooter"
const footerSection = document.getElementById("vintagefooter");

// Sets the inner HTML content of the footer section
footerSection.innerHTML = `
    <!-- Your footer HTML content here -->
<footer class="footer-distributed">
      <section class="footer-left">
        <h3>Telecomm</h3>
        <p class="footer-links">
          <a href="index.html" class="link-1">Home</a>
        
          <a href="productpage.html">Pricing</a>
        
          <a href="aboutpage.html">About</a>
          
          <a href="contactpage.html">Contact</a>
        </p>
        <p class="footer-company-name"></p>
      </section>
      <section class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>1 Georgian Dr, Barrie, ON L4M 3X9</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>+1 (123) 456-789</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@telecomm.com</a></p>
        </div>
      </section>
      <section class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          Telecomm where nostalgia meets innovation in the world of retro telephones.
          
        </p>
        <div class="footer-icons">
          <a href="https://www.facebook.com/" id="fa-facebook" class="fa fa-facebook"></a>
          <a href="https://twitter.com/" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/feed/" class="fa fa-linkedin"></a>
          <a href="https://github.com/" class="fa fa-github"></a>
        </div>
      </section>
    </footer>
`;

// Get the footer company name element
const footerCompanyName = document.querySelector(".footer-company-name");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the current year
footerCompanyName.textContent = `Telecomm © ${currentYear}`;

// Get the navigation links element
var navLinks = document.getElementById("navLinks");

// Function to show the navigation menu
function showMenu() {
    navLinks.style.right = "0";
}

// Function to hide the navigation menu
function hideMenu() {
    navLinks.style.right = "-200px";
}
