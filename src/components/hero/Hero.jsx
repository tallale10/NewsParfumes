import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
  <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.text_input}
            type='text'
            placeholder='Search Perfume Company'
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>A Description</label>
          <input type="text"
          placeholder='Search Perfume Company' />
        </div>
        <div className={styles.search_btn}>
          <button className={styles.btn}>Search for PerfumeS</button>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    </div>
  );
};

export default Hero;