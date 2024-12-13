import React from 'react';
import './TestimonialSection.css'; // Custom styles
import { useTranslation } from "react-i18next";
const TestimonialSection = () => {
  const { t } = useTranslation();
  return (
    <section className="testimonial-section">
      <h2 className="section-title">{t("What Our Clients Say")}</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial-item">
          <div className="video-container">
            <iframe
              className="testimonial-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y5JEGsEjp_o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="client-feedback"> {t("This company helped me achieve my business goals!")}</p>
          <h4 className="client-name">- Amanda, CEO of E-Shop Inc</h4>
        </div>

        <div className="testimonial-item">
          <div className="video-container">
            <iframe
              className="testimonial-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EU2hfKMGPaQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="client-feedback"> {t("Their work is exceptional. Highly recommend!")}</p>
          <h4 className="client-name">- Liz. , CTO of Brasil tarot Co.</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
