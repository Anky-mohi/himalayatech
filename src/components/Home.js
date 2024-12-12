import React from "react";
import { Link } from "react-router-dom";
import Brands from "./Brands";
import Portfolio from "./Portfolio";
import VideoSection from "./VideoSection";
import ImageOverlayAnimation from "./ImageOverlayAnimation";
import UpDownAnimation from "./UpDownAnimation";
import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Rightupdown from "./Rightupdown";
import PlanCard from "./PlanCard";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Portfolios from "../components/Portfolios";
import WhatsAppButton from "./WhatsAppButton";
import TestimonialSection from "./TestimonialSection";
import ProjectsSection from "./ProjectsSection";
import LeadCaptureForm from "./LeadCaptureForm";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageButton, setShowLanguageButton] = useState(false);

  useEffect(() => {
    // Show the language button after a delay when the component mounts
    const timer = setTimeout(() => {
      setShowLanguageButton(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const handleChatClick = () => {
    setIsOpen(!isOpen);
  };
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

  const { t } = useTranslation();

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
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

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message to chat history
    setMessages([...messages, { text: input, user: "user" }]);

    // Clear input field
    setInput("");
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
          <WhatsAppButton/>
     
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
        <section class="hero_image pt100 pb100">
          <div class="row hero_banr ">
            <div class="col-md-3 igm">
              <Rightupdown />
            </div>
            <div class="col-md-6 cmw custom-margin">
              <h1 class="f-w-100 dwt pb tf dc f40">
                {t("Custom Web, App, and IT Solutions Tailored for You")}
              </h1>
              <p class="dc pm f22 dwt st f-w-100">
                {t(
                  " With over 5+ years of expertise, we have gained an ultimate grasp on custom website & app development to aid your digital transformation. Our incredible performance on 100+ symbolizes the next-gen web development skills & professionalism we thrive on!"
                )}
              </p>
              <p class="dc pm f22 dwt st f-w-100">
                {t(
                  "We have acquired extensive knowledge and experience in developing custom websites and applications that can assist in your digital transformation. Our exceptional track record of delivering over 100+ projects is a testament to our advanced web development skills and dedication to professionalism."
                )}
              </p>
              <p class="dwt">
                <img src="./Badges.png" class="badge-img" />
              </p>
              <li class="convert-sec-li pr dwt dc f20 mt-20">
                <div class="introduction__button">
                  <Link to="/Contact" class="abc">
                    {" "}
                    {t("Contact Us!")}
                  </Link>
                </div>
              </li>
            </div>
            <div class="col-md-3 cli">
              <UpDownAnimation />
            </div>
          </div>
        </section>

        <section class="expertise">
          <div class="container">
            <div class="expertise__wrapper">
              <div class="expertise__leftSide">
                <div className="img">
                  <ImageOverlayAnimation />

                  <span>
                    <br></br>
                    <img src="./ProductDevelopment.png"></img>

                    <div></div>
                    <div></div>
                  </span>
                </div>
              </div>
              <div class="expertise__rightSide">
                <div class="expertise__card--wrapper">
                  <div class="expertise__card">
                    <div class="expertise__heading"> {t("E-Commerce")}</div>
                    <div class="expertise__supportText">
                      {t(
                        "We specialize in creating high-quality e-commerce websites that help businesses sell products and services to their customers. Our team works closely with clients to understand their business needs and create a customized website that meets their goals. We use the latest technologies to ensure that our websites are visually appealing, user-friendly, and optimized for performance, security, and search engine optimization"
                      )}
                    </div>
                  </div>
                  <div class="expertise__card">
                    <div class="expertise__heading">
                      {t("Product Development")}
                    </div>
                    <div class="expertise__supportText">
                      {t(
                        " Product Development: We are an e-commerce website development company that specializes in creating high-quality online storefronts. Our team works closely with clients to create custom websites that are visually appealing, easy to use, and optimized for performance Learn More - Button"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do">
          <div class="container-fluid">
            <h2 class="section-title mb-2 h1">{t("WHAT WE DO")}</h2>
            <p class="text-center text-muted h5">
              {" "}
              {t(
                "Having and managing the right marketing strategy is crucial in a rapidly evolving market."
              )}
            </p>
            <div class="row mt-5">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-1">
                    <h3 class="card-title">{t("WEB DEVELOPMENT")}</h3>
                    <p class="card-text">
                      {t(
                        "An affordable web design service is what you get when we design your website."
                      )}
                    </p>
                    <a title="Read more" class="read-more">
                      <Link to="/Services">{t("Read more")} </Link>

                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-2">
                    <h3 class="card-title">{t("Social Media Marketing")}</h3>
                    <p class="card-text">
                      {t(
                        "We have different ideas and new generations to focus on the market with young talents."
                      )}
                    </p>
                    <a title="Read more" class="read-more">
                      <Link to="/Services"> {t("Read more")}</Link>

                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-3">
                    <h3 class="card-title">{t("GLOBAL SUPPORT")}</h3>
                    <p class="card-text">
                      {t(
                        "We help technology companies grow by providing a world-class customer experience for their customers."
                      )}
                    </p>
                    <a title="Read more" class="read-more">
                      <Link to="/Services">{t("Read more")} </Link>

                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-4">
                    <h3 class="card-title">
                      {t("Animation and digital film production")}
                    </h3>
                    <p class="card-text">
                      {t(
                        "Realized with passion, designed with perfection, the art of creativity Sample Work.."
                      )}
                    </p>
                    <a title="Read more" class="read-more">
                      <Link to="/Services">{t("Read more")} </Link>

                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-5">
                    <h3 class="card-title">{t("OFFSHORE SERVICES")}</h3>
                    <p class="card-text">
                      {t(
                        "We help you organize business and technology strategies in a cost-effective way."
                      )}
                    </p>
                    <a title="Read more" class="read-more">
                      <Link to="/Services">{t("Read more")}</Link>

                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <div class="card-block block-6">
                    <h3 class="card-title">{t("E-commerce")}</h3>
                    <p class="card-text">
                      {t(
                        " We have many of the best technologies such as we use reactjs, node js and many others to build the spa beat website"
                      )}
                    </p>
                    <a title="Read more" class="read-more">
                      <Link to="/Services">{t("Read more")} </Link>

                      <i class="fa fa-angle-double-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div className="introduction__content">
            <h2>
              <span class="boldtext">{t("WE HAVE MORE SUCCESS")} </span>{" "}
              <br></br>
              <span class="orangecolor">
                {t("STORIES THAN OTHER AGENCIES HAVE CLIENTS")}
              </span>
            </h2>
            <br></br>
            <p class="pharatext">
              {t(
                "We grow your business 10 times faster, better and smarter than other Businesses.Himalayastechies turns an idea into a well-recognized brand!!"
              )}
            </p>
          </div>
        </div>
        
    
        
       
        
<TestimonialSection/>
        
    
        <br></br>
<ProjectsSection/>
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

        <Brands />

        <section class="contact">
          <div class="container">
            <div class="contact__heading">
              <p>
                {t("Lets work")}
                <br />
                <span>{t("Together.")}</span>
              </p>
            </div>
            <VideoSection />
            <div class="contact__wrapper">
              <div class="contact__leftSide">
                <div class="contact__content">
                  <p>
                    {t(
                      "Lets Work Together! 😁 At our company, we believe in partnering with our customers to crea te powerful and effective solutions that meet their unique needs. We bring our expertise in web development, e-commerce, and product development to each project, working collaboratively to ensure that every detail is executed flawlessly. Our personalized approach ensures that each client receives the attention and support they need to achieve their business goals, and our commitment to excellence ensures results that exceed expectations"
                    )}
                  </p>
                </div>
              </div>
              <div class="contact__rightSide">
                <div class="contact__form">
                  <h1 class="contact__form--title">{t("Contact us")}</h1>
                  <p class="contact__form--description">
                    {t(
                      "At our company, we believe in partnering with our customers to create powerful and effective solutions that meet their unique needs."
                    )}
                  </p>
                  <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                      <form
                        action="https://formspree.io/f/xknakpww"
                        method="POST"
                        id="contact-form"
                        name="contact-form"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="md-form mb-0">
                              <label for="name" class="">
                                {t("Your Name")}
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="md-form mb-0">
                              <label for="email" class="">
                                {t("Your Email")}
                              </label>
                              <input
                                type="text"
                                id="email"
                                name="email"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="md-form mb-0">
                              <label for="subject" class="">
                                {t("Messages")}
                              </label>
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="text-center text-md-left">
                          <button type="submit" class="btn btn--primary">
                            {t("send")}
                          </button>
                        </div>
                      </form>

                      <div class="status"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default Home;
