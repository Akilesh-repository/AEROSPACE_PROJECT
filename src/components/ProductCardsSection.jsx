import React, { useState, useEffect, useRef } from 'react';
import './ProductCardsSection.css';
import useFadeIn from '../hooks/useFadeIn';

import productCard1 from '../assets/product_card_1.jpg';
import productCard2 from '../assets/product_card_2.jpg';
import productCard3 from '../assets/product_card_3.jpg';
import productCard4 from '../assets/product_card_4.jpg';
import productCard5 from '../assets/product_card_5.jpg';
import productCard6 from '../assets/product_card_6.jpg';
import productCard7 from '../assets/product_card_7.jpg';
import productCard8 from '../assets/product_card_8.jpg';

const cardsData = [
  { id: 1, image: productCard1, name: 'Medical' },
  { id: 2, image: productCard2, name: 'Aerospace' },
  { id: 3, image: productCard3, name: 'Defence' },
  { id: 4, image: productCard4, name: 'EV/Auto' },
  { id: 5, image: productCard5, name: 'Construction Equipment' },
  { id: 6, image: productCard6, name: 'Power Transmission and Distribution' },
  { id: 7, image: productCard7, name: 'Railway' },
  { id: 8, image: productCard8, name: 'Industrial Equipment' },
];

const ProductCardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const requestRef = useRef();
  const [ref, isVisible] = useFadeIn();

  const rotateLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const rotateRight = () => {
    setActiveIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const animate = () => {
    const now = Date.now();
    if (!animate.lastTime) animate.lastTime = now;
    const elapsed = now - animate.lastTime;

    if (elapsed > 3000) { // 5 seconds delay
      setActiveIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
      animate.lastTime = now;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className={`product-cards-section fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="cards-container">
        {cardsData.map((card, index) => {
          let className = 'card hidden';
          const displayCount = 5;
          const half = Math.floor(displayCount / 2);
          
          // Calculate positions for 5 visible cards
          const positions = [];
          for (let i = -half; i <= half; i++) {
            let pos = (activeIndex + i + cardsData.length) % cardsData.length;
            positions.push(pos);
          }
          
          if (positions.includes(index)) {
            const positionIndex = positions.indexOf(index);
            if (positionIndex === half) {
              className = 'card active';
            } else if (positionIndex < half) {
              className = `card prev-${half - positionIndex}`;
            } else {
              className = `card next-${positionIndex - half}`;
            }
          }
          
          return (
            <div key={card.id} className={className}>
              <div className="card-image-placeholder">
                <img src={card.image} alt={`Product Card ${card.id}`} />
              </div>
              <div className="card-name">{card.name}</div>
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={rotateLeft} aria-label="Rotate left">&#60;</button>
        <button onClick={rotateRight} aria-label="Rotate right">&#62;</button>
      </div>
    </section>
  );
};

export default ProductCardsSection;