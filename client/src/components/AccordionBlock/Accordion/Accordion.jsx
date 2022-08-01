import React, { useState } from 'react'
import CONSTANTS from '../../../constants';
import styles from './Accordion.module.sass';

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_item}>
        <div onClick={()=>setIsActive(!isActive)} className={styles.accordion_title}>
          <h4>{props.title}</h4>
          <img className={isActive ? styles.accordion_img_active : styles.accordion_img_notactive} src={`${CONSTANTS.HOWITWORKS_IMAGES_PATH}arrow-right.svg`} alt="arrow" />
        </div>
        <div className={isActive ? styles.accordion_content_active : styles.accordion_content_notactive}>
          {props.content}            
        </div>
      </div>
    </div>

  )
}

export default Accordion