import React from 'react';
import styles from './Footer.module.css';
import whats from '../../images/whats.jpg';
import face from '../../images/face.jpg';
import inst from '../../images/inst.jpg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Noureddine Company  .</p>
        <div className={styles.socialIcons}>
          <img src={whats} alt="WhatsApp" />
          <img src={face} alt="Facebook" />
          <img src={inst} alt="Instagram" />
        </div>
        <button>Share A Company</button>
      </div>
    </div>
  );
};

export default Footer;
