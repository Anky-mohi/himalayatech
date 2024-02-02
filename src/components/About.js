import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";


import { FaBars, FaTimes } from "react-icons/fa";

const About = () => {
  const styles = {
    backgroundColor: "#cb6036",
    color: "white",
    fontSize: "16px",
    padding: "90px",
    Text: "white",
  };
  const text = {
    color: "white",
  };

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
          <div className="logo">
            {" "}
            <a href="/">
              <img className="ls" src="./hmlogo.png" alt="Brand Logo" />
            </a>
          </div>
          <nav ref={navRef}>
            <ul className="d">
              <li className="ws">
                <a href="/">
                  <span>
                    {" "}
                    <img className="qa" src="./homepage-icon.png" alt="" />{" "}
                  </span>
                  &nbsp;Home
                </a>
              </li>
              <li className="ws">
                {" "}
                <Link to="/About">
                  <span>
                    {" "}
                    <img
                      className="qa"
                      src="./Icon_OurProducts.png"
                      alt=""
                    />{" "}
                  </span>
                  &nbsp;About
                </Link>
              </li>
              <li className="ws">
                {" "}
                <Link to="/Services">
                  <span>
                    {" "}
                    <img className="qa" src="./Services-icon.png" alt="" />{" "}
                  </span>
                  &nbsp;Services
                </Link>
              </li>
              <li className="ws">
                <a href="/contact">
                  <span>
                    {" "}
                    <img
                      className="qa"
                      src="./Icon_ContactUs.png"
                      alt=""
                    />{" "}
                  </span>
                  &nbsp;Contact
                </a>
              </li>
              <li className="ws">
                <a href="/contact">
                  <span>
                    {" "}
                    <img className="qa" src="./carrer-icon.png" alt="" />{" "}
                  </span>
                  &nbsp;Carrier
                </a>
              </li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
            <div className="w">
              {" "}
              <div class="introduction__button">
                <Link to="/Contact" class="abc">
                  Get A quote
                </Link>
              </div>
            </div>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>

      <main>
        <section class="banner">
          <img src="./ProductDevelopment.png" alt="About us banner image" />
          <div class="banner__content--wrapper">
          </div>
        </section>

        <section class="vision">
          <div class="container">
            <div class="vision__wrapper">
              <div class="vision__heading">
                <p class="like-text popup-text">
                  <span class="text-effect">V</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">S</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">N</span>
                </p>
              </div>
              <div class="vision__supportContent">
                <p class="main--text">
                Vision We create web and mobile app solutions that will delight your customers At Himalayas Tech, our team is dedicated to building and designing brands through mobile and web app development. We collaborate closely with our clients to develop a detailed plan for the creation of their website or mobile app, ensuring that we deliver the desired results they are looking for. We work remotely or in person. We collaborate with people and computers, but usually not at the same time. The transition between them can be challenging, confusing, or impossible. That's all changing. The next wave of business transformation will shift from building siloed digital capabilities to laying the foundations of a new reality – a shared reality that seamlessly blends our physical lives of atoms and our digital lives of bits. The goal is not an incremental improvement, but a radical change. The real value of this convergence lies in the creation of something fundamentally new. Look at generative AI – many people are using it to generate purely digital images and content, but we already see how it will shape the future of science
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="whatwedo">
          <div class="container">
            <div class="whatwedo__wrapper">
              <div class="whatwedo__heading">
                <p class="like-text popup-text">
                  <span class="text-effect">H</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">M</span>
                  <span class="text-effect">A</span>
                  <span class="text-effect">L</span>
                  <span class="text-effect">A</span>
                  <span class="text-effect">Y</span>
                  <span class="text-effect">A</span>
                  <span class="text-effect">S</span>
                  &nbsp;&nbsp;

                  <span class="text-effect">T</span>
                  <span class="text-effect">E</span>
                  <span class="text-effect">C</span>
                  <span class="text-effect">H</span>
                  <span class="text-effect">.</span>
                  
                </p>
              </div>
              <div class="whatwedo__supportContent">
                <p class="main--text">
                When Atoms Meet Bits: The Foundations of Our New Reality When Atoms Meet Bits The Foundations of Our New Reality We live in two parallel realities, one of atoms and the other of bits. When we shop, we walk into a store or go to a web page. We work remotely or in person. We collaborate with people and computers, but usually not at the same time. The transition between them can be challenging, confusing, or impossible. All of that is changing. The next wave of business transformation will shift from building siloed digital capabilities to laying the foundations of a new reality – a shared reality that seamlessly blends our physical lives of atoms and our digital lives of bits. The goal is not an incremental improvement, but a radical change. The real value of this convergence lies in the creation of something fundamentally new. Look at generative AI – many people are using it to generate purely digital images and content, but we already see how it will shape the future of science, enterprise data, how we design and manufacture products, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>


<div class="container">
        
            
        
        </div>

</div>
    

<footer class="fotter-cnt" id="ftl">
        <div class="main-page-sec main-page-sec2">
          <div class="row">
            <div class="col-md-3">
              <ul class="nav flex-column">
                <span class="title-ftl">eCommerce </span> <br></br>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="shopify-development-services.php">
                    Shopify
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="prestashop-development-services.php"
                  >
                    PrestaShop
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="woocommerce-development-services.php"
                  >
                    WooCommerce
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="bigcommerce-development-services.php"
                  >
                    BigCommerce
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="magento-development-services.php">
                    Magento
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul class="nav flex-column">
                <span class="title-ftl">Product Development</span> <br></br>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="saas-web-application-development.php"
                  >
                    Saas Web applications
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="third-party-integration-services.php"
                  >
                    Third Party Integrations
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="ui-ux-design-services.php">
                    UI/UX Design
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="mobile-app-development-services.php"
                  >
                    Mobile App Dev
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul class="nav flex-column">
                <span class="title-ftl">Expertise</span> <br></br>
                <li class="nav-item">
                  <a class="nav-link" href="https://shopify.webgarh.com/">
                    {" "}
                    Shopify Apps
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="third-party-integration-services.php"
                  >
                    Third Party Integrations
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="prestashop-module-development.php">
                    {" "}
                    PrestaShop Modules
                  </a>{" "}
                </li>
                <li class="nav-item">
                  {" "}
                  <a
                    class="nav-link"
                    href="software-product-development-services.php"
                  >
                    {" "}
                    Product Development{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul class="nav flex-column">
                <span class="title-ftl"> Contacts</span>
                <br></br>
                <li class="nav-item">
                  <p>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    &nbsp; +919872567925 &nbsp;
                    <img
                      className="cont"
                      src="./icons8-india-48.png"
                      alt="Brand Logo"
                    />
                  </p>

                  <p class="address-p">
                    himalayastechies digital technology 67,8th Floor, Sector -
                    67 SAS Nagar, Punjab (India)
                  </p>
                </li>
                <li class="nav-item">
                  <p>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    &nbsp; +551194772-7979 &nbsp;
                    <img
                      className="cont"
                      src="./icons8-brazil-48.png"
                      alt="Brand Logo"
                    />
                  </p>

                  <p class="address-p">
                    Av Marcos Penteado de Ulhoa Rodrigues , 939 , Alphaville
                    Barueri SP
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="main-page-sec right-reser">
          <div class="row web-lm">
            <div class="f-w-100 bottom-border-line text-center jc">
              <div class="left-footer-data">
                <span class="copyright quick-links pr f16">
                  ©<script>document.write(new Date().getFullYear())</script>2024
                  <span class="do">
                    <a class="priterm" href="index.php">
                      www.himalayastechies.com{" "}
                    </a>
                  </span>
                  | All Rights Reserved
                </span>
              </div>

              <div class="right-footer-data">
                <ul class="nav flex-ico">
                  <div class="icon-item">
                    <a
                      class="nav-link"
                      href="https://www.facebook.com/WebgarhSolutions"
                      target="_blank"
                    >
                      {" "}
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a
                      class="nav-link"
                      href="https://www.instagram.com/webgarh/"
                      target="_blank"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a
                      class="nav-link"
                      href="https://www.youtube.com/@webgarh"
                      target="_blank"
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a
                      class="nav-link"
                      href="https://twitter.com/Webgarh/"
                      target="_blank"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a
                      class="nav-link"
                      href="https://www.linkedin.com/company/webgarh-solutions-private-limited/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
