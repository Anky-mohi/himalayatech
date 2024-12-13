import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";



const Contact = () => {
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
      const av = {
        background: "aliceblue"
      }
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
              <Link to="/Portfolio">
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
            <Link to="/contact">
                <span>
                  {" "}
                  <img className="qa" src="./Icon_ContactUs.png" alt="" />{" "}
                </span>
                &nbsp;{t("Contact")}
              </Link>
            </li>
            <li className="ws">
            <Link to="/contact">
                <span>
                  {" "}
                  <img className="qa" src="./carrer-icon.png" alt="" />{" "}
                </span>
                &nbsp;{t("Carrier")}
              </Link>
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


<br></br>
<br></br>
<section class="vh-100">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black">
          <div class="card-body p-md-5" style={av}>
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{t("Contact Us")}</p>

                <form class="mx-1 mx-md-4"  action="https://formspree.io/f/xknakpww"
                        method="POST"
                        id="contact-form"
                        name="contact-form">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-group mb-3">
                    <label for="name" class="form-label"> {t("Name")}</label>
                    <input type="text" id="name" name="name" class="form-control" placeholder={t("Enter your name")} required/>
                  </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-group mb-3">
                    <label for="number" class="form-label"> {t("Contact Number")}</label>
                    <input type="number" id="number" name="number" class="form-control" placeholder= {t("Enter your contact no.")} required/>
                  </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text"  id="subject"
                                name="subject" class="form-control" />
                      <label class="form-label" for="form3Example1c"> {t("MESSAGES")}</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                    <button type="submit" class="btn btn-primary bg-warning btn-lg"> {t("send")}</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<br></br>
<br></br>

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
  )
}

export default Contact