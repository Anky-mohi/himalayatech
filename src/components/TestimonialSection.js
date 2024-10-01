import React from 'react';
import './TestimonialSection.css'; // Custom styles

// Reusable Testimonial component
const Testimonial = ({ videoUrl, clientFeedback, clientName }) => {
  return (
    <div className="testimonial">
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p className="client-feedback">"{clientFeedback}"</p>
      <h4 className="client-name">{clientName}</h4>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-wrapper">
        {/* Testimonial 1 */}
        <Testimonial
          videoUrl="https://www.youtube.com/embed/y5JEGsEjp_o?si=RLvnnXd2wqQxbv33"
          clientFeedback="HimalayaTech helped us scale our e-commerce business."
          clientName="Amanda, CEO of E-Shop Inc."
        />
        {/* Testimonial 2 */}
        <Testimonial
          videoUrl="https://www.youtube.com/embed/EU2hfKMGPaQ?si=g8iXalfH5uarpwhc"
          clientFeedback="Their team delivered our marketplace website on time with top-notch quality."
          clientName="Liz. , CTO of Brasil tarot Co."
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
