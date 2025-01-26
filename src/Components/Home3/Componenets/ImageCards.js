import React from 'react';
import '../Componenets/imgCards.css';

import image1 from '../Images/srpr.png';
import image2 from '../Images/terraWATER.png';
import image3 from '../Images/image3.jpeg';

function ImageCards({ onHover }) {
  const images = [
    { src: image1, skill: 'FRONT END', color: '#eb4634' },  // Color for skill
    { src: image2, skill: 'UI/UX', color: '#345eeb' },     // Color for skill
    { src: image3, skill: 'PROGRAMMER', color: '#db34eb' }, // Color for skill
  ];

  return (
    <div className="img-card-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`img-card img-${index + 1}`}
          onMouseEnter={() => onHover(image.skill, image.color)} // Pass skill and color to parent
          onMouseLeave={() => onHover('', '')} // Clear skill and color on hover out
        >
          <img className="image" src={image.src} alt={image.skill} />
        </div>
      ))}
    </div>
  );
}

export default ImageCards;
