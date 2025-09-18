import React from 'react'
import EcomWidgetCard from './EcomWidgetCard'
import styles from "@/components/Ecomwidget.module.css"
const EcomWidgetGrid = () => {
  return (
    <div className={styles.EcomWidgetGridWrapper}>
      <EcomWidgetCard imgSrc="/01-01.webp"/>
      <div className={styles.EcomGridText}>
        <span>"If someone wants to make a difference, they need to be able to feel uncomfortable"</span>
      </div>
    </div>
  )
}

export default EcomWidgetGrid
