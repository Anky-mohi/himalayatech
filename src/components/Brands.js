// Brands.js
import React from 'react';
import styled from 'styled-components';

const brandsData = [
  'brand1.jpg',
  'brand2.jpg',
  'brand3.jpeg',
  'brand4.jpeg',
  'brand5.png',
  'brand6.jpeg',
  'brand7.png',
  'brand8.jpg',
  'brand9.jpeg',
  'brand11.jpeg',
  'brand12.jpeg',
  'brand13.jpeg',
  'brand14.jpeg',
  'brand15.jpeg',


  
  // Add more images as needed
];

const BrandsSection = styled.section`
  text-align: center;
  padding: 40px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BrandLogo = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px; // Optional: Add border radius to the images
  }
`;

const Brands = () => {
  return (
    <BrandsSection>
     <div class="contact__heading">
              <p>
                <span>Brands</span>
              </p>
            </div>
      <BrandContainer>
        {brandsData.map((brand, index) => (
          <BrandLogo key={index}>
            <img src={`/br/${brand}`} alt={`Brand ${index + 1}`} />
          </BrandLogo>
        ))}
      </BrandContainer>
    

    </BrandsSection>
  );
};

export default Brands;
