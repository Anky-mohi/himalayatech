import React from "react";
import Slider from "react-slick";
import "./server.css"; // Add your custom CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import traffic from "../assets/img/gym.jpeg";
import web from "../assets/img/webdevelopment.webp";
import app from "../assets/img/appdevelop.webp";
import sof from "../assets/img/inventory1.png";
import social from "../assets/img/social.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your needs.",
    image: sof,
  },
  {
    title: "Website Development",
    description: "Modern and responsive website designs.",
    image: web,
  },
  {
    title: "App Development",
    description: "High-performance mobile and web applications.",
    image: app,
  },
  {
    title: "Social Media Management",
    description: "Engage your audience and grow your brand.",
    image: social,
  },
  {
    title: "Traffic Management",
    description: "Drive targeted traffic to your platforms.",
    image: traffic,
  },
];

const Server = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const { t } = useTranslation();
  return (
    <div className="services-section">
      <h2 className="section-title">{t("Our Services")}</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to="/Contact" >
            <button className="contact-button">{t("Contact Now")}</button>
                    
                  </Link> 
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Server;
