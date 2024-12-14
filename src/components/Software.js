import React from "react";
import Slider from "react-slick";
import "./software.css"; // Add your custom CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import inventory from "../assets/img/inventory.jpeg";
import restaurant from "../assets/img/bakery.jpeg";
import clinic from "../assets/img/pharmacy.jpeg";
import gym from "../assets/img/gym.jpeg";
import school from "../assets/img/bookstore.jpeg";
import retail from "../assets/img/cosmetics.jpeg";
import hotel from "../assets/img/canteen.jpeg";
import logistics from "../assets/img/cardealer.jpeg";
import accounting from "../assets/img/social.jpg";
import crm from "../assets/img/inventory1.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Gestão de Inventário",
    description: "Otimize seu inventário com nosso poderoso software.",
    image: inventory,
  },
  {
    title: "Gestão de Restaurantes",
    description: "Soluções eficientes para gerenciar seu restaurante.",
    image: restaurant,
  },
  {
    title: "Gestão de Clínicas",
    description: "Simplifique os registros e agendamentos de pacientes.",
    image: clinic,
  },
  {
    title: "Gestão de Academias",
    description: "Otimize associações e horários com facilidade.",
    image: gym,
  },
  {
    title: "Gestão Escolar",
    description: "Ferramentas inteligentes para gerenciar sua instituição de ensino.",
    image: school,
  },
  {
    title: "Gestão de Varejo",
    description: "Impulsione seu negócio de varejo com nossas soluções.",
    image: retail,
  },
  {
    title: "Gestão de Hotéis",
    description: "Simplifique reservas e experiências dos hóspedes.",
    image: hotel,
  },
  {
    title: "Gestão de Logística",
    description: "Rastreie e otimize as operações logísticas.",
    image: logistics,
  },
  {
    title: "Gestão Contábil",
    description: "Software contábil preciso e eficiente.",
    image: accounting,
  },
  {
    title: "Soluções de CRM",
    description: "Melhore o relacionamento com clientes com nosso CRM.",
    image: crm,
  },
];

const Software = () => {
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
    <>
      <div className="services-section">
        <h2 className="section-title">{t("Nossas Soluções de Software")}</h2>
        <p className="section-subtitle">
          {t("Ganhe um site grátis com cada compra de software!")}
        </p>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="badge">{t("Site Grátis!")}</div>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/Contact">
                <button className="contact-button">
                  {t("Entre em Contato Agora")}
                </button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Software;
