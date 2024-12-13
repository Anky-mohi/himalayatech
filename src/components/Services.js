import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import PlanCard from "./PlanCard";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Server from "./Server";

const Services = () => {
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
  const color = {
    color: "orange",
  };
  const plans = [
    {
      id: 1,
      title: "Bronze",
      price: 29.31,
      features: [
        "Free Hosting",
        "Custom Domain",
        "Online Support",
        "content changes",
      ],
    },
    {
      id: 2,
      title: "Silver",
      price: 48.63,
      features: [
        "Free Hosting + Domain",
        "",
        "SEO (Search Engine Optimization)",
        "Products Upload + content change up tp 25",
      ],
    },
    {
      id: 3,
      title: "Gold",
      price: 67.96,
      features: [
        "Free Hosting + Domain",
        "Online Support 24/7",
        "Instagram Marketing",
        "Products Upload + content change up tp 55",
      ],
    },
    {
      id: 4,
      title: "Diamond",
      price: 111.14,
      features: [
        "Free Hosting + Domain",
        "Online Support 24/7",
        "Professional Social Media Management",
        "Inclusion of up to 100 New Products and Page Changes",
      ],
    },
  ];
  const handleSubscribe = (plan) => {
    // Implement your payment processing logic here (e.g., integrate with a payment gateway)
    console.log(`Subscribed to ${plan.title} plan for $${plan.price}`);
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

     <Server/>

      {/* <header>
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
              <Link to="/Contact"> 
                  <span>
                    {" "}
                    <img
                      className="qa"
                      src="./Icon_ContactUs.png"
                      alt=""
                    />{" "}
                  </span>
                  &nbsp;Contact
              </Link>
              </li>
              <li className="ws">
                <a href="#contact">
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
        <img
          src="./WhatsApp Image 2023-05-17 at 6.43.25 PM.jpeg"
          alt="About us banner image"
        />
        <div class="banner__content--wrapper">
          <div class="container">
            <div class="we">
              <div class="head">
                <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h1>
                      We <span style={color}>Love</span> to do
                    </h1>
                  </div>
                </div>
                <div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h2> Design, Development and Marketing</h2>
                  </div>
                </div>
                <div class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
                  <div class="et_pb_text_inner">
                    <h2>Our mission help businesses becomes online</h2>
                  </div>
                </div>
                <div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="what-we-do">
        <div class="container-fluid">
          <h2 class="section-title mb-2 h1">{t("WHAT WE DO")}</h2>
          <p class="text-center text-muted h5">
            {t("Having and managing the right marketing strategy is crucial in a rapidly evolving market.")}
          </p>
          <br></br>
          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-1">
                  <h3 class="card-title">{t("WEB DEVELOPMENT")}</h3>
                  <p class="card-text">
                    <img src="./19362653.jpg" />
                  {t("Himalayastechies creating and maintaining websites for businesses and organizations. It involves a range of tasks,such as designing, coding, testing, and publishing web pages and applications. Web developers use various programming languages and frameworks to create functional, user-friendly, and visually appealing websites. They also ensure that websites are optimized for search engines, accessible to users with disabilities, and compatible with different devices and web browsers. As businesses' online presence becomes increasingly important, web development has become a critical component of any company's digital strategy.")}
                  </p>
                  <a
                    href="https://wa.me/919872567925"
                    title="Read more"
                    class="read-more"
                  >
                    {t("Know more")}<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-2">
                  <h3 class="card-title">{t("Social Media Marketing")}</h3>
                  <p class="card-text">
                    <img src="./5618169.jpg" />
                    Himalayastechies creating and sharing content, engaging with
                    followers, and running targeted advertising campaigns to
                    reach a specific audience. Social media marketing can help
                    businesses increase brand awareness, increase website
                    traffic, generate leads, and drive sales. The most popular
                    social media platforms for marketing include Facebook,
                    Instagram, Twitter, LinkedIn, and YouTube. To be successful
                    in social media marketing, businesses need to develop a
                    solid strategy, create high-quality content, and
                    consistently engage with their followers. It is also
                    important to track and analyze the performance of social
                    media campaigns to ensure that they are meeting business
                    objectives.{t("Lets work")}
                  </p>
                  <a
                    href="https://wa.me/919872567925"
                    title="Read more"
                    class="read-more"
                  >
                    {t("Know more")}<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-3">
                  <h3 class="card-title">{t("GLOBAL SUPPORT")}</h3>
                  <p class="card-text">
                    <img src="./Wavy_Eco-06_Single-01.jpg" />
                    Himalayastechies provide services to their customers all
                    over the world by helping them with their products or
                    services. This support can come in many forms, such as
                    phone, email, live chat, or self-help resources such as a
                    knowledge base or FAQs. The goal of global support is to
                    help customers resolve issues or answer questions they may
                    have about a product or service. Companies with global
                    support teams often have dedicated support teams across
                    multiple time zones to ensure that customers receive quick
                    and effective assistance. Providing global support can help
                    businesses improve customer satisfaction, increase customer
                    loyalty, and drive sales.{t("Lets work")}
                  </p>
                  <a
                    href="https://wa.me/919872567925"
                    title="Read more"
                    class="read-more"
                  >
                    {t("Know more")}<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-4">
                  <h3 class="card-title">
                    {t("Animation and digital film production")}
                  </h3>
                  <p class="card-text">
                    <img src="./151.jpg" />
                    Himalayastechies create visually stunning and compelling
                    content through the use of computer-generated graphics,
                    animations, and visual effects. It covers a wide range of
                    techniques, including 2D and 3D animation, compositing,
                    motion graphics, and special effects. In the animation
                    industry, professionals use software tools such as Adobe
                    Animate, Autodesk Maya, and Toon Boom Harmony to create
                    animated content for television shows, movies, video games,
                    and other digital media platforms. With 3D animation, they
                    can create realistic characters and environments, which can
                    be used in virtual reality and augmented reality
                    applications.{t("Lets work")}
                  </p>
                  <a
                    href="https://wa.me/919872567925"
                    title="Read more"
                    class="read-more"
                  >
                    {t("Know more")}<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-5">
                  <h3 class="card-title">{t("OFFSHORE SERVICES")}</h3>
                  <p class="card-text">
                    <img src="./6182753.jpg" />
                    Offshore services refer to the outsourcing of business
                    processes or functions to a foreign country or a third-party
                    service provider. This can include a range of activities
                    such as software development, customer support, data entry,
                    and more. Offshore services can offer a number of benefits
                    to businesses, including cost savings, access to expertise,
                    increased flexibility, and the ability to focus on core
                    business functions. However, there are also potential risks
                    and challenges, such as language and cultural barriers, time
                    zone differences, and data security concerns.
                  </p>
                  <a
                    href="https://wa.me/919872567925"
                    title="Read more"
                    class="read-more"
                  >
                    {t("Know more")}<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="card">
                <div class="card-block block-6">
                  <h3 class="card-title">{t("E-commerce")}</h3>
                  <p class="card-text">
                    <img src="./female_shopping_from_phone.jpg" />
                    E-commerce, short for electronic commerce, refers to the
                    buying and selling of goods and services over the internet.
                    It involves online transactions between businesses,
                    individuals, or entities and can be conducted through
                    various platforms such as websites, mobile apps, and social
                    media. E-commerce has revolutionized the way people shop,
                    offering convenience, accessibility, and flexibility for
                    consumers and businesses alike. It allows businesses to
                    reach a global audience and operate 24 hours a day.{t("Lets work")}
                  </p>
                  <a
                    href="https://wa.me/919872567925"
                    title="Read more"
                    class="read-more"
                  >
                    {t("Know more")}<i class="fa fa-angle-double-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>
      <div>
        <div className="Plan">
          <h1 className="subhead">{t("Subscription Plans")}</h1>
          <br></br>
          <br></br>
          <div className="plans-container">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                handleSubscribe={handleSubscribe}
              />
            ))}
          </div>
        </div>
      </div>
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
  );
};

export default Services;
