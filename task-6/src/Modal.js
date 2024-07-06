import React from 'react';
import './Modal.css';

const Modal = ({ images, selectedIndex, closeModal, setSelectedImageIndex }) => {
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <span className="close" onClick={closeModal}>&times;</span>
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <img className="modal-content" src={images[selectedIndex]} alt="" />
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Modal;
