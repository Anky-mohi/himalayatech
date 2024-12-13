import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Portfolios from "../components/Portfolios";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import { FaBars, FaTimes } from "react-icons/fa";

const Portfolio = () => {
  const { t } = useTranslation();

  const styles = {
    backgroundColor: "#cb6036",
    color: "white",
    fontSize: "16px",
    padding: "90px",
    Text: "white",
  };

  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
  
    { imageSrc: '42-nz-medi-pharmaceuticals.webp', content: 'NZ Medi is a company that specializes in the export of high-quality, wholesale pharmaceuticals. They aim to provide low cost, high-quality prescription and over-the-counter medication to businesses worldwide. Their main focus is on exceptional customer service, and providing their customers with access to transparent information. They export medicines to other countries for customers who are looking for high-quality products at affordable prices.' },
    { imageSrc: '3-the-beer-lodge.png', content: 'The Beer Lodge is a small business that specializes in selling signs to enhance the appearance of home bars. Established in 2014, they have a reputation for providing high-quality products and plan to continue doing so in the future.' },
    { imageSrc: '49-arthurs-jewelers.png', content: 'Arthur’s Jewelers has revolutionized the way diamond buying is done in Minnesota. This concept empowers the customer and sets new standards for quality, education, and value. You will be amazed by Minnesota’s largest selection of loose and mounted GIA and AGS certified diamonds complemented by an unsurpassed collection of the finest designers in the jewelry industry today. Arthur’s Jewelers offers a shopping experience that includes lifetime upgrade policies and money-back guarantees never before offered by jewelry retailers, which gives you total confidence in your purchase.' },
    { imageSrc: '39-vidi-skin-care.png', content: 'We worked with an Australian production company for skin care products. The client came to us with a very rough idea and we created a design based on his requirements. We created an application where client can sale the products. It was required a better presentation of products and company. When we completed this then client was very happy with the outcome and did not want to close the screen. Especially the design part of the application. We are not sure the client is not going to change is soon.' },
    {imageSrc:'15-octane-lighting.png',content:'Octanelighting.com is the website of Octane Lighting, a company that specializes in the design, manufacturing, and distribution of lighting products for automotive and motorcycle applications. They offer a wide range of products such as LED lighting, HID lighting, and other lighting accessories. The website provides detailed information about their products, including specifications, installation instructions and warranty information. The website also includes a section for company information, where you can learn more about the company history  mission and vision statement. Also, have a section for customer support where you can find frequently asked questions warranty information and can contact customer support team if needed.'}
    // Add more testimonial objects as needed
  ];

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };
  const text = {
    color: "white",
  };
  const [isUp, setIsUp] = useState(true);

  const toggleDirection = () => {
    setIsUp((prevState) => !prevState);
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

      <main>
        {/* Hero Section */}

        <Portfolios />
      </main>
      <br></br>
      <br></br>
      <div>
        <div class="container">
          <div class="row align-items-start" bis_skin_checked="1">
            {" "}
            <div class="col-xl-6 col-lg-6" bis_skin_checked="1">
              {" "}
              <div class="tp-hero__content-box" bis_skin_checked="1">
                {" "}
                <h1
                  class="portfolio-heading"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  CRM/ERP For Your Business{" "}
                </h1>{" "}
                <p
                  class="wow tpfadeUp pb-0"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  Customer service is the backbone of business, you can’t risk
                  it with a run of the mill CRM software. You need a Customer
                  Relationship Management Tool that empowers you to engage your
                  customers better. This is where Tech Prastish kicks in. We
                  bring you the most comprehensive CRM solution to help you
                  engage your customers better. Our CRM development services are
                  backed by immense research and thorough analysis, bringing you
                  a plethora of features. We want you to achieve your business
                  goals, and thus, we give you a CRM solution that enhances your
                  customer service.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div
              class="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
              bis_skin_checked="1"
            >
              {" "}
              <div
                class="tp-hero__wrapper-3 d-flex justify-content-center justify-content-lg-end"
                bis_skin_checked="1"
              >
                <img
                  src="./CRM_dev.svg"
                  alt="Your Image"
                  className={isUp ? "up" : "down"}
                  onClick={toggleDirection}
                />{" "}
                <div class="tp-hero__thumb-3" bis_skin_checked="1">
                  {" "}
                  <div class="tp-hero__thumb-shape-1" bis_skin_checked="1">
                    {" "}
                    <img
                      alt=""
                      nitro-lazy-src="https://cdn-hgnkf.nitrocdn.com/kXwIsxgQvTuqBCHJVxgGzMFyBupVegkm/assets/images/optimized/rev-ffda420/www.tech-prastish.com/wp-content/themes/techprastish/assets/images/pink-image.png"
                      class=" lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      id="MzI4OjEzMg==-1"
                      src="https://cdn-hgnkf.nitrocdn.com/kXwIsxgQvTuqBCHJVxgGzMFyBupVegkm/assets/images/optimized/rev-ffda420/www.tech-prastish.com/wp-content/themes/techprastish/assets/images/pink-image.png"
                    />{" "}
                  </div>{" "}
                  <div class="tp-hero__thumb-shape-2" bis_skin_checked="1">
                    {" "}
                    <img
                      alt=""
                      nitro-lazy-src="https://cdn-hgnkf.nitrocdn.com/kXwIsxgQvTuqBCHJVxgGzMFyBupVegkm/assets/images/optimized/rev-ffda420/www.tech-prastish.com/wp-content/themes/techprastish/assets/images/blue-image.png"
                      class=" lazyloaded"
                      decoding="async"
                      nitro-lazy-empty=""
                      id="MzMxOjEzMg==-1"
                      src="https://cdn-hgnkf.nitrocdn.com/kXwIsxgQvTuqBCHJVxgGzMFyBupVegkm/assets/images/optimized/rev-ffda420/www.tech-prastish.com/wp-content/themes/techprastish/assets/images/blue-image.png"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="crm">
        <br></br>
        <div className="portfolio-heading">Qualities Of Crm/Erp For Your Business
</div>
        <MDBRow>
          <MDBCol size="12" sm="6" md="4">
            <div className="div">
              <div>
                <img className="crmimg" src="./icon-12-1.svg" />
              </div>
              <div className="crmhead">
                What Makes Our CRM Solutions So Good?
              </div>
              <div className="crmpara">
                We understand your requirements, assets, flaws, processes and
                align everything on a reputed CRM software (Zoho, Salesforce,
                Microsoft Dynamics) or we can create something that you need.
              </div>{" "}
              <br></br>
            </div>
          </MDBCol>

          <MDBCol size="12" sm="6" md="4">
            <div className="div">
              <div>
                <img className="crmimg" src="./icon-13-1.svg" />
              </div>
              <div className="crmhead">
              Contact Management
              </div>
              <div className="crmpara">
              Also known as customer management, this particular feature allows you to create highly personalized marketing strategies for better conversions and ROI.
              </div>{" "}
              <br></br>
            </div>
          </MDBCol>
          <MDBCol size="12" sm="6" md="4">
            <div className="div">
              <div>
                <img className="crmimg" src="./icon-14-1.svg" />
              </div>
              <div className="crmhead">
              Dynamic Dashboard

              </div>
              <div className="crmpara">
              We pay due focus on the dashboard, enabling the admin to have complete control of the software and get things done in the fewest clicks possible.


              </div>{" "}
              <br></br>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol size="12" sm="6" md="4">
            <div className="div">
              <div>
                <img className="crmimg" src="./icon-15-1.svg" />
              </div>
              <div className="crmhead">
              Lead Management

              </div>
              <div className="crmpara">
              Our state-of-the-art CRM enhances your lead management. Focus on the right lead at the right time, every time.


              </div>{" "}
              <br></br>
            </div>
          </MDBCol>
          <MDBCol size="12" sm="6" md="4">
            <div className="div">
              <div>
                <img className="crmimg" src="./icon-16-1.svg" />
              </div>
              <div className="crmhead">
              Email Marketing Integration

              </div>
              <div className="crmpara">
              From MailChimp to Constant Contact, we will happily integrate any email marketing tool of your choice. We don’t believe in importing the information, we believe in complete functionality.


              </div>{" "}
              <br></br>
            </div>
          </MDBCol>
          <MDBCol size="12" sm="6" md="4">
            <div className="div">
              <div>
                <img className="crmimg" src="./icon-17-1.svg" />
              </div>
              <div className="crmhead">
              Custom interface

              </div>
              <div className="crmpara">
              Observe and analyze all your campaigns to see which ones are working best for you and which you need to drop right then.


              </div>{" "}
              <br></br>
            </div>
          </MDBCol>
        </MDBRow>
        <br></br>
      </div>
      <br></br>
      <br></br>
    
      <div className="portfolio-heading">Delivered Project
</div>
       
<div className="testimonial-slider">
      <div className="slider-content">
        <img src={testimonials[currentSlide].imageSrc} alt="Testimonial" />
        <p>{testimonials[currentSlide].content}</p>
      </div>
      <div className="pagination">
        <button onClick={handlePrevClick}><i class="fa fa-arrow-left" aria-hidden="true"></i>
</button>&nbsp;&nbsp;&nbsp;
        <button onClick={handleNextClick}><i class="fa fa-arrow-right" aria-hidden="true"></i>
</button>
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

export default Portfolio;
