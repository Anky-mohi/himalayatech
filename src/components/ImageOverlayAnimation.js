// ImageOverlayAnimation.js

import React from 'react';


const ImageOverlayAnimation = () => {
  return (
    <div className="image-container">
      <img src="./bathroom-sign-wall-fotor-20240116133436.jpg" alt="Background" className="background-image" />
      <div className="overlay overlay-1">
      
      </div>
      <div className="overlay overlay-2">
        <img src="./5618169.jpg" alt="Overlay 2" className="overlay-image" />
      </div>
      <div className="overlay overlay-3">
        <img src="./WhatsApp Image 2024-01-18 at 8.22.27 PM.jpeg" alt="Overlay 3" className="overlay-image" />
      </div>
    </div>
  );
};

export default ImageOverlayAnimation;
