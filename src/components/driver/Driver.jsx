import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../images/drive.jpg'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h2>Find the perfect perfume <span>to try before you buy</span></h2>
            <p>Make sure your future scent fits well with your lifestyle by spending your time in public facilities.</p>
            <button>Browse perfumes</button>
        </div>
    </div>
  )
}

export default Driver