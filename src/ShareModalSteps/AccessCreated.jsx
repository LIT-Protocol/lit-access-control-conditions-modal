import React, { useState } from 'react'

import styles from '../share-modal.module.scss'

const AccessCreated = ({ setActiveStep, copyToClipboard }) => {

  return (
    <div>
      <div className={styles.titles}>
        <h3>Access Requirement Created!</h3>
        <a className={styles.link} onClick={() => setActiveStep('whatToDo')}>Create Another</a>
      </div>
      <div className={styles.types}>
        <div className={styles.type} onClick={copyToClipboard}>
          <h4>Share</h4>
          <div className={styles.btnBock}>
            <div className={styles.img}>
              <svg width="100" height="137" viewBox="0 0 100 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8884 128.739C28.1338 133.558 34.3178 136.312 45.9986 137C70.7347 137 91.5934 122 99.5 111C97.8967 111.459 95 112.5 93 113C91.9334 113.267 89.6871 113 89 113C94.4969 108.41 98.3197 102.633 98.9066 90.8744C99.5937 77.1055 96.3871 63.7956 92.7225 57.8291C92.0354 60.5829 91.3483 67.4673 85.8514 67.4673C80.3539 67.4673 80.3541 61.4777 80.3545 53.2012V53.0101C80.3545 43.3719 80.3545 36.7628 74.1704 26.8492C67.2993 15.8342 50.8086 3.90117 42.5632 0C43.2503 2.98325 44.7619 9.63819 45.9986 15.8342C47.3728 22.7186 45.9986 28.2261 42.5632 30.9799C39.2108 33.6671 33.6307 30.9799 33.6307 30.9799C33.6307 30.9799 28.8209 39.2412 26.0724 49.5678C23.324 59.8945 26.0724 72.8372 18.5142 74.3518C10.9559 75.8663 8.20739 63.7956 8.20735 57.8291C4.54274 67.6968 -2.09937 89.9106 0.64909 99.8241C3.39755 109.738 9.58158 115.429 12.33 117.035C11.6429 117.035 9.8244 117.359 8.20735 117.035C4.77189 116.347 3.39755 115.199 2.02332 114.281C5.68793 118.183 11.5962 123.892 19.8884 128.739Z" fill="white" />
                <path d="M3.39766 44.0603C1.74859 47.3648 2.25247 52.3216 2.71055 54.3869C4.54281 52.5511 8.75706 47.7779 10.9559 43.3719C13.1548 38.9658 12.7883 34.6516 12.3301 33.0452C10.0398 35.34 5.04673 40.7558 3.39766 44.0603Z" fill="white" />
              </svg>
              <div className={styles.linkIcon}></div>
            </div>
            <h5><a className={styles.link}>Click to copy link.</a>  <br /> Only authorized wallets  can open the file</h5>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AccessCreated