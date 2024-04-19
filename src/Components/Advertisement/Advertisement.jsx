import React, { useState, useEffect } from 'react';

const Advertisement = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://media.discordapp.net/attachments/1101500368397029496/1230177795603169382/Imagen_de_WhatsApp_2024-04-17_a_las_08.55.06_f9e5071f.jpg?ex=66325f5a&is=661fea5a&hm=dbe765115a873dd9ac981fa2c50ff1266761119cb76320b35bdd7bbe2a701d87&=&format=webp&width=700&height=700',
    'https://media.discordapp.net/attachments/1101500368397029496/1230177820685107220/Imagen_de_WhatsApp_2024-04-17_a_las_09.18.12_0bdc7ad0.jpg?ex=66325f60&is=661fea60&hm=2980ccb2eaf44ad2c297ec109825e468d0783a4921f7f1f7932772c863ac913e&=&format=webp&width=700&height=700'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambiar de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="card">
      <h2>¡Descubre La Gran Colombia!</h2>
      <div className='carousel'>
        <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
      </div>
    </div>
  );
};

export default Advertisement;
