import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    'https://wallpapercave.com/wp/wp5975242.jpg',
    'http://data1.ibtimes.co.in/en/full/683165/janasena-party-formation-day-photo.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.-QkiJNznvMgIFVkoF0BrRQHaFj&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.LAuLwZN_HETOjICUPgOeygHaEK&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.Yg2Mr1QywMVYznoqH6EjgAHaFj&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.8mJflcl6zpQGbXUAsBQOAwHaEJ&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.3F0nO6RyYLI-5YYBa-eINAHaE7&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.Zke06PSaW2-JM2NWrfSO4wHaEK&pid=Api&P=0&h=180',
    'https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2018/12/Amrapali-Kata-IAS-Images-6.jpg?fit=1080%2C720&ssl=1',
    'https://tse3.mm.bing.net/th?id=OIP.vcupr4ErvFA3VSdOdyBeLAHaE8&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.2ChJCMfasJVsN41EXXPaDQHaE8&pid=Api&P=0&h=180',
    'https://cdn.odysseytraveller.com/app/uploads/2020/02/Kerala-backwaters.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.2x9AdQVeUEPKGaiOUEiGTwHaFj&pid=Api&P=0&h=180',
    'https://data1.ibtimes.co.in/en/full/799326/devara.jpg',
    'https://tse4.mm.bing.net/th?id=OIP._SdXYlcdNJNOJwtEXm9DVAHaEK&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.MyFQbCx_aEdsZb3Usp--WgHaHa&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.unfjgNTcXj-NFKuZemyQTgHaL2&pid=Api&P=0&h=180',
    
    // Add more images as needed
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={() => openModal(index)} />
      ))}
      {selectedImageIndex !== null && (
        <Modal
          images={images}
          selectedIndex={selectedImageIndex}
          closeModal={closeModal}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default ImageGallery;
