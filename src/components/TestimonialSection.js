import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialSection.css'; // Custom styles

const testimonials = [
  {
    videoUrl: "https://www.youtube.com/embed/your-video-id1", // YouTube embed link
    clientName: "John Doe",
    feedback: "This product has completely changed the way we work!"
  },
  {
    videoUrl: "https://www.youtube.com/embed/your-video-id2", // YouTube embed link
    clientName: "Jane Smith",
    feedback: "An absolute game-changer for our team."
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="video-container">
              <iframe
                className="testimonial-video"
                src={testimonial.videoUrl}
                title={`Testimonial from ${testimonial.clientName}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="client-feedback">"{testimonial.feedback}"</p>
            <h4 className="client-name">{testimonial.clientName}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
