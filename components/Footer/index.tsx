import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import facebook from '@/public/icon/facebook.svg'
import twitter from '@/public/icon/twitter.svg'
import instagram from '@/public/icon/instagram.svg'

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
          <a className={styles.footerLogo}>Panto</a>
          <p className={styles.footerTxt}>Преимущество аренды рабочего места у нас заключается в том, что вы получаете комфортный сервис и все удобства.</p>
        </div>
        <div className={styles.footerServices}>
          <h5 className={styles.footerTitle}>Услуги</h5>
          <ul className={styles.footerList}>
            <li>Рекламная рассылка</li>
            <li>Кампании</li>
            <li>Брендинг</li>
          </ul>
        </div>
        <div className={styles.footerFurniture}>
          <h5 className={styles.footerTitle}>Мебель</h5>
          <ul className={styles.footerList}>
            <li>Кровати</li>
            <li>Стулья</li>
            <li>Все</li>
          </ul>
        </div>
        <div className={styles.footerContacts}>
          <h5 className={styles.footerTitle}>Контакты</h5>
          <ul className={styles.footerList}>
            <li><Image src={facebook} alt='' />Facebook</li>
            <li><Image src={twitter} alt='' />Twitter</li>
            <li><Image src={instagram} alt='' />Instagram</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <span className={styles.footerCopyRightText}>Copyright © 2021</span>
        <div className={styles.footerCopyRightLink}>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
