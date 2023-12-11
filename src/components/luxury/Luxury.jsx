import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
              <div className={styles.heading}>
        <h1> Company Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Selection from the best companies to shine with style</span>
          </p>
        </div>

      </div>

      <div className={styles.container}>
        <div className={styles.card}>
            <img src="https://i.pinimg.com/236x/79/61/b9/7961b943197bb38bb93be6a9df2db877.jpg" alt="" />
            <div className={styles.content}>
                <h3>ZARA</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://i.pinimg.com/236x/fe/61/46/fe614626168b7504bb8856c5e3a2c7e9.jpg" alt="" />
            <div className={styles.content}>
                <h3>BOSS</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://i.pinimg.com/236x/c0/d2/2d/c0d22d47bc26d9b4cecbd313704e26db.jpg" alt="" />
            <div className={styles.content}>
                <h3>DIOR</h3>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://i.pinimg.com/236x/17/eb/4d/17eb4d116b247eb30c0d388bdb5ec5d8.jpg" alt="" />
            <div className={styles.content}>
                <h3>GICCI</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Luxury