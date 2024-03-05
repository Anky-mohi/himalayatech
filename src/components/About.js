import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Portfolios from "../components/Portfolios";

import { FaBars, FaTimes } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

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
     <div className="whatsapp">
        <div>
          <LanguageSwitcher />
        </div>
      </div>

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
                &nbsp;{t("Home")}
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
                &nbsp;{t("Portfolio")}
              </Link>
            </li>
            <li className="ws">
              {" "}
              <Link to="/Services">
                <span>
                  {" "}
                  <img className="qa" src="./Services-icon.png" alt="" />{" "}
                </span>
                &nbsp;{t("Services")}
              </Link>
            </li>
            <li className="ws">
              <a href="/contact">
                <span>
                  {" "}
                  <img className="qa" src="./Icon_ContactUs.png" alt="" />{" "}
                </span>
                &nbsp;{t("Contact")}
              </a>
            </li>
            <li className="ws">
              <a href="/contact">
                <span>
                  {" "}
                  <img className="qa" src="./carrer-icon.png" alt="" />{" "}
                </span>
                &nbsp;{t("Carrier")}
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
                {t("Get A quote")}
              </Link>
            </div>
          </div>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

      <main>
       
        
      {/* Hero Section */}
     


      
      <Portfolios />

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
                <span class="title-ftl"> {t("eCommerce")}</span> <br></br>
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
                <span class="title-ftl">{t("Product Development")}</span>{" "}
                <br></br>
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
                <span class="title-ftl">{t("Expertise")}</span> <br></br>
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
                <span class="title-ftl"> {t("Contacts")}</span>
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
                    <a class="nav-link" href="" target="_blank">
                      {" "}
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a
                      class="nav-link"
                      href="https://www.instagram.com/himalayastechies?igsh=MWVkZjk3c2tndHJubA=="
                      target="_blank"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a class="nav-link" href="" target="_blank">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a class="nav-link" href="" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>

                  <div class="icon-item">
                    <a class="nav-link" href="" target="_blank">
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
